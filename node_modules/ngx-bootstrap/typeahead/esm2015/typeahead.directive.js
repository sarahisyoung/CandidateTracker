/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { from, isObservable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadMatch } from './typeahead-match.class';
import { getValueFromObject, latinize, tokenize } from './typeahead-utils';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { TypeaheadConfig } from './typeahead.config';
export class TypeaheadDirective {
    /**
     * @param {?} ngControl
     * @param {?} element
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} config
     * @param {?} cis
     * @param {?} changeDetection
     */
    constructor(ngControl, element, viewContainerRef, renderer, config, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurres. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, { typeaheadHideResultsOnBlur: config.hideResultsOnBlur });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(isObservable(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (isObservable(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        const /** @type {?} */ value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this._container.nextActiveMatch();
                return;
            }
            // enter, tab
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if an item is visible - prevent form submission
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            return;
        }
        // if an item is visible - don't change focus
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab') {
            event.preventDefault();
            this._container.selectActiveMatch();
            return;
        }
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        const /** @type {?} */ valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        const /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap(() => this.typeahead))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
            const /** @type {?} */ normalizedQuery = this.normalizeQuery(value);
            return from(this.typeahead)
                .pipe(filter((option) => {
                return (option &&
                    this.testMatch(this.normalizeOption(option), normalizedQuery));
            }), toArray());
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        const /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
        const /** @type {?} */ normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        let /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        let /** @type {?} */ spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            const /** @type {?} */ _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            const /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        const /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            let /** @type {?} */ matches = [];
            // extract all group names
            const /** @type {?} */ groups = limited
                .map((option) => getValueFromObject(option, this.typeaheadGroupField))
                .filter((v, i, a) => a.indexOf(v) === i);
            groups.forEach((group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(limited
                    .filter(
                // tslint:disable-next-line:no-any
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group)
                    .map(
                // tslint:disable-next-line:no-any
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
            });
            this._matches = matches;
        }
        else {
            this._matches = limited.map(
            // tslint:disable-next-line:no-any
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
        }
    }
    /**
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: NgControl, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: TypeaheadConfig, },
    { type: ComponentLoaderFactory, },
    { type: ChangeDetectorRef, },
];
TypeaheadDirective.propDecorators = {
    "typeahead": [{ type: Input },],
    "typeaheadMinLength": [{ type: Input },],
    "typeaheadWaitMs": [{ type: Input },],
    "typeaheadOptionsLimit": [{ type: Input },],
    "typeaheadOptionField": [{ type: Input },],
    "typeaheadGroupField": [{ type: Input },],
    "typeaheadAsync": [{ type: Input },],
    "typeaheadLatinize": [{ type: Input },],
    "typeaheadSingleWords": [{ type: Input },],
    "typeaheadWordDelimiters": [{ type: Input },],
    "typeaheadPhraseDelimiters": [{ type: Input },],
    "typeaheadItemTemplate": [{ type: Input },],
    "optionsListTemplate": [{ type: Input },],
    "typeaheadScrollable": [{ type: Input },],
    "typeaheadOptionsInScrollableView": [{ type: Input },],
    "typeaheadHideResultsOnBlur": [{ type: Input },],
    "typeaheadLoading": [{ type: Output },],
    "typeaheadNoResults": [{ type: Output },],
    "typeaheadOnSelect": [{ type: Output },],
    "typeaheadOnBlur": [{ type: Output },],
    "container": [{ type: Input },],
    "dropup": [{ type: Input },],
    "onInput": [{ type: HostListener, args: ['input', ['$event'],] },],
    "onChange": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "onFocus": [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
function TypeaheadDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TypeaheadDirective.propDecorators;
    /**
     * options source, can be Array of strings, objects or
     * an Observable for external matching process
     * @type {?}
     */
    TypeaheadDirective.prototype.typeahead;
    /**
     * minimal no of characters that needs to be entered before
     * typeahead kicks-in. When set to 0, typeahead shows on focus with full
     * list of options (limited as normal by typeaheadOptionsLimit)
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMinLength;
    /**
     * minimal wait time after last character typed before typeahead kicks-in
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWaitMs;
    /**
     * maximum length of options items list. The default value is 20
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsLimit;
    /**
     * when options source is an array of objects, the name of field
     * that contains the options value, we use array item as option in case
     * of this field is missing. Supports nested properties and methods.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionField;
    /**
     * when options source is an array of objects, the name of field that
     * contains the group value, matches are grouped by this field when set.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadGroupField;
    /**
     * should be used only in case of typeahead attribute is array.
     * If true - loading of options will be async, otherwise - sync.
     * true make sense if options array is large.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadAsync;
    /**
     * match latin symbols.
     * If true the word súper would match super and vice versa.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLatinize;
    /**
     * Can be use to search words by inserting a single white space between each characters
     *  for example 'C a l i f o r n i a' will match 'California'.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSingleWords;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to break words. Defaults to space.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWordDelimiters;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to match exact phrase.
     * Defaults to simple and double quotes.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadPhraseDelimiters;
    /**
     * used to specify a custom item template.
     * Template variables exposed are called item and index;
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadItemTemplate;
    /**
     * used to specify a custom options list template.
     * Template variables: matches, itemTemplate, query
     * @type {?}
     */
    TypeaheadDirective.prototype.optionsListTemplate;
    /**
     * specifies if typeahead is scrollable
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadScrollable;
    /**
     * specifies number of options to show in scroll view
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsInScrollableView;
    /**
     * used to hide result on blur
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadHideResultsOnBlur;
    /**
     * fired when 'busy' state of this component was changed,
     * fired on async mode only, returns boolean
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLoading;
    /**
     * fired on every key event and returns true
     * in case of matches are not detected
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadNoResults;
    /**
     * fired when option was selected, return object with data of this option
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnSelect;
    /**
     * fired when blur event occurres. returns the active item
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnBlur;
    /**
     * A selector specifying the element the typeahead should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TypeaheadDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    TypeaheadDirective.prototype.dropup;
    /**
     * if false don't focus the input element the typeahead directive is associated with on selection
     * @type {?}
     */
    TypeaheadDirective.prototype._container;
    /** @type {?} */
    TypeaheadDirective.prototype.isTypeaheadOptionsListActive;
    /** @type {?} */
    TypeaheadDirective.prototype.keyUpEventEmitter;
    /** @type {?} */
    TypeaheadDirective.prototype._matches;
    /** @type {?} */
    TypeaheadDirective.prototype.placement;
    /** @type {?} */
    TypeaheadDirective.prototype._typeahead;
    /** @type {?} */
    TypeaheadDirective.prototype._subscriptions;
    /** @type {?} */
    TypeaheadDirective.prototype._outsideClickListener;
    /** @type {?} */
    TypeaheadDirective.prototype.ngControl;
    /** @type {?} */
    TypeaheadDirective.prototype.element;
    /** @type {?} */
    TypeaheadDirective.prototype.renderer;
    /** @type {?} */
    TypeaheadDirective.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLElBQUksRUFBZ0IsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxNQUFNOzs7Ozs7Ozs7O0lBZ0hKLFlBQW9CLFNBQW9CLEVBQ3BCLFNBQ1IsZ0JBQWtDLEVBQzFCLFVBQ1IsTUFBdUIsRUFDdkIsR0FBMkIsRUFDbkI7UUFOQSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFlBQU8sR0FBUCxPQUFPO1FBRVAsYUFBUSxHQUFSLFFBQVE7UUFHUixvQkFBZSxHQUFmLGVBQWU7Ozs7OztrQ0E1R0cs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OzJDQUVMLEtBQUs7aUNBSUwsTUFBTTttQ0FJTixNQUFNO2tDQUVOLE1BQU07Z0NBR04sTUFBTTswQkFNTixLQUFLO3VCQUdMLEtBQUs7d0JBMEVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBdUJoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQXFDaEMsWUFBWSxTQUFDLE9BQU8sY0FDcEIsWUFBWSxTQUFDLE9BQU87dUJBUXBCLFlBQVksU0FBQyxNQUFNOzBCQU9uQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmcm9tLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJ30pXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogb3B0aW9ucyBzb3VyY2UsIGNhbiBiZSBBcnJheSBvZiBzdHJpbmdzLCBvYmplY3RzIG9yXG4gICAqIGFuIE9ic2VydmFibGUgZm9yIGV4dGVybmFsIG1hdGNoaW5nIHByb2Nlc3NcbiAgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0eXBlYWhlYWQ6IGFueTtcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xuICAvKiogbWluaW1hbCB3YWl0IHRpbWUgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXIgdHlwZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pbiAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRXYWl0TXM6IG51bWJlcjtcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0OiBudW1iZXI7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZCB0aGF0XG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkR3JvdXBGaWVsZDogc3RyaW5nO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIG9mIHR5cGVhaGVhZCBhdHRyaWJ1dGUgaXMgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8O6cGVyIHdvdWxkIG1hdGNoIHN1cGVyIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xuICAvKiogQ2FuIGJlIHVzZSB0byBzZWFyY2ggd29yZHMgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJzXG4gICAqICBmb3IgZXhhbXBsZSAnQyBhIGwgaSBmIG8gciBuIGkgYScgd2lsbCBtYXRjaCAnQ2FsaWZvcm5pYScuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTaW5nbGVXb3JkcyA9IHRydWU7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzID0gJyAnO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXG4gICAqIERlZmF1bHRzIHRvIHNpbXBsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlcyBleHBvc2VkIGFyZSBjYWxsZWQgaXRlbSBhbmQgaW5kZXg7XG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgdHlwZWFoZWFkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIG9wdGlvbnMgbGlzdCB0ZW1wbGF0ZS5cbiAgICogVGVtcGxhdGUgdmFyaWFibGVzOiBtYXRjaGVzLCBpdGVtVGVtcGxhdGUsIHF1ZXJ5XG4gICAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgb3B0aW9uc0xpc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIHNwZWNpZmllcyBpZiB0eXBlYWhlYWQgaXMgc2Nyb2xsYWJsZSAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAvKiogc3BlY2lmaWVzIG51bWJlciBvZiBvcHRpb25zIHRvIHNob3cgaW4gc2Nyb2xsIHZpZXcgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ID0gNTtcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHQgb24gYmx1ciAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogYm9vbGVhbjtcbiAgLyoqIGZpcmVkIHdoZW4gJ2J1c3knIHN0YXRlIG9mIHRoaXMgY29tcG9uZW50IHdhcyBjaGFuZ2VkLFxuICAgKiBmaXJlZCBvbiBhc3luYyBtb2RlIG9ubHksIHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZExvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCBvbiBldmVyeSBrZXkgZXZlbnQgYW5kIHJldHVybnMgdHJ1ZVxuICAgKiBpbiBjYXNlIG9mIG1hdGNoZXMgYXJlIG5vdCBkZXRlY3RlZFxuICAgKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE5vUmVzdWx0cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gb3B0aW9uIHdhcyBzZWxlY3RlZCwgcmV0dXJuIG9iamVjdCB3aXRoIGRhdGEgb2YgdGhpcyBvcHRpb24gKi9cbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gYmx1ciBldmVudCBvY2N1cnJlcy4gcmV0dXJucyB0aGUgYWN0aXZlIGl0ZW0gKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0eXBlYWhlYWQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzICovXG4gIEBJbnB1dCgpIGRyb3B1cCA9IGZhbHNlO1xuXG4gIC8vIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgLyoqIGlmIGZhbHNlIHJlc3RyaWN0IG1vZGVsIHZhbHVlcyB0byB0aGUgb25lcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cCBvbmx5IHdpbGwgYmUgcHJvdmlkZWQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEVkaXRhYmxlOmJvb2xlYW47XG4gIC8qKiBpZiBmYWxzZSB0aGUgZmlyc3QgbWF0Y2ggYXV0b21hdGljYWxseSB3aWxsIG5vdCBiZSBmb2N1c2VkIGFzIHlvdSB0eXBlICovXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c0ZpcnN0OmJvb2xlYW47XG4gIC8qKiBmb3JtYXQgdGhlIG5nLW1vZGVsIHJlc3VsdCBhZnRlciBzZWxlY3Rpb24gKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZElucHV0Rm9ybWF0dGVyOmFueTtcbiAgLyoqIGlmIHRydWUgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gaXRlbSB3aGVuIHRoZXJlIGlzIG9uZSBvcHRpb24gdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHVzZXIgaW5wdXQgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uRXhhY3Q6Ym9vbGVhbjtcbiAgLyoqICBpZiB0cnVlIHNlbGVjdCB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIG1hdGNoIG9uIGJsdXIgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uQmx1cjpib29sZWFuO1xuICAvKiogIGlmIGZhbHNlIGRvbid0IGZvY3VzIHRoZSBpbnB1dCBlbGVtZW50IHRoZSB0eXBlYWhlYWQgZGlyZWN0aXZlIGlzIGFzc29jaWF0ZWQgd2l0aCBvbiBzZWxlY3Rpb24gKi9cbiAgICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNPblNlbGVjdDpib29sZWFuO1xuXG4gIF9jb250YWluZXI6IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudDtcbiAgaXNUeXBlYWhlYWRPcHRpb25zTGlzdEFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJvdGVjdGVkIGtleVVwRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJvdGVjdGVkIF9tYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdO1xuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbS1sZWZ0JztcbiAgLy8gcHJvdGVjdGVkIHBvcHVwOkNvbXBvbmVudFJlZjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgX3R5cGVhaGVhZDogQ29tcG9uZW50TG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX291dHNpZGVDbGlja0xpc3RlbmVyOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgY29uZmlnOiBUeXBlYWhlYWRDb25maWcsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBlbGVtZW50LFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIHJlbmRlcmVyXG4gICAgKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBUeXBlYWhlYWRDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgdHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXI6IGNvbmZpZy5oaWRlUmVzdWx0c09uQmx1ciB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgfHwgMjA7XG5cbiAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9XG4gICAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gdm9pZCAwID8gMSA6IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoO1xuXG4gICAgdGhpcy50eXBlYWhlYWRXYWl0TXMgPSB0aGlzLnR5cGVhaGVhZFdhaXRNcyB8fCAwO1xuXG4gICAgLy8gYXN5bmMgc2hvdWxkIGJlIGZhbHNlIGluIGNhc2Ugb2YgYXJyYXlcbiAgICBpZiAoXG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID09PSB1bmRlZmluZWQgJiZcbiAgICAgICEoaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSlcbiAgICApIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSkge1xuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkQXN5bmMpIHtcbiAgICAgIHRoaXMuYXN5bmNBY3Rpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3luY0FjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25JbnB1dChlOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBGb3IgYDxpbnB1dD5gcywgdXNlIHRoZSBgdmFsdWVgIHByb3BlcnR5LiBGb3Igb3RoZXJzIHRoYXQgZG9uJ3QgaGF2ZSBhXG4gICAgLy8gYHZhbHVlYCAoc3VjaCBhcyBgPHNwYW4gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPmApLCB1c2UgZWl0aGVyXG4gICAgLy8gYHRleHRDb250ZW50YCBvciBgaW5uZXJUZXh0YCAoZGVwZW5kaW5nIG9uIHdoaWNoIG9uZSBpcyBzdXBwb3J0ZWQsIGkuZS5cbiAgICAvLyBGaXJlZm94IG9yIElFKS5cbiAgICBjb25zdCB2YWx1ZSA9XG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZS50YXJnZXQudmFsdWVcbiAgICAgICAgOiBlLnRhcmdldC50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICAgOiBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+PSB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCkge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgb25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAvLyBlc2NcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdXBcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICB0aGlzLl9jb250YWluZXIucHJldkFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBkb3duXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDAgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICB0aGlzLl9jb250YWluZXIubmV4dEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBlbnRlciwgdGFiXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkT25CbHVyLmVtaXQodGhpcy5fY29udGFpbmVyLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8vIG5vIGNvbnRhaW5lciAtIG5vIHByb2JsZW1zXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBhbiBpdGVtIGlzIHZpc2libGUgLSBwcmV2ZW50IGZvcm0gc3VibWlzc2lvblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgYW4gaXRlbSBpcyB2aXNpYmxlIC0gZG9uJ3QgY2hhbmdlIGZvY3VzXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGVsKG1hdGNoOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XG4gICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpLnNldFZhbHVlKHZhbHVlU3RyKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl90eXBlYWhlYWRcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLy8gdG9kbzogYWRkIGFwcGVuZCB0byBib2R5LCBhZnRlciB1cGRhdGluZyBwb3NpdGlvbmluZyBzZXJ2aWNlXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IGAke3RoaXMuZHJvcHVwID8gJ3RvcCcgOiAnYm90dG9tJ30gbGVmdGB9KVxuICAgICAgLnNob3coe1xuICAgICAgICB0eXBlYWhlYWRSZWY6IHRoaXMsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIGRyb3B1cDogdGhpcy5kcm9wdXBcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyIHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5vbk91dHNpZGVDbGljaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fdHlwZWFoZWFkLmluc3RhbmNlO1xuICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnQgPSB0aGlzO1xuICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XG4gICAgICB0aGlzLl90eXBlYWhlYWQuaGlkZSgpO1xuICAgICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25PdXRzaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudHlwZWFoZWFkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIG1lcmdlTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy50eXBlYWhlYWQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBvcHRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0TWF0Y2godGhpcy5ub3JtYWxpemVPcHRpb24ob3B0aW9uKSwgbm9ybWFsaXplZFF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBub3JtYWxpemVPcHRpb24ob3B0aW9uOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXG4gICAgICBvcHRpb24sXG4gICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkXG4gICAgKTtcbiAgICBjb25zdCBub3JtYWxpemVkT3B0aW9uID0gdGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZShvcHRpb25WYWx1ZSlcbiAgICAgIDogb3B0aW9uVmFsdWU7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZE9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgLy8gSWYgc2luZ2xlV29yZHMsIGJyZWFrIG1vZGVsIGhlcmUgdG8gbm90IGJlIGRvaW5nIGV4dHJhIHdvcmsgb24gZWFjaFxuICAgIC8vIGl0ZXJhdGlvblxuICAgIGxldCBub3JtYWxpemVkUXVlcnk6IHN0cmluZyB8IHN0cmluZ1tdID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcbiAgICAgID8gbGF0aW5pemUodmFsdWUpXG4gICAgICA6IHZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgID8gdG9rZW5pemUoXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAgICApXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcblxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFjZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmluZGV4T2YodGVzdCkgPj0gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdKTogdm9pZCB7XG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzIHx8IFtdKTtcblxuICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XG5cbiAgICBpZiAoIXRoaXMuaGFzTWF0Y2hlcygpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIC8vIGZpeDogcmVtb3ZlIHVzYWdlIG9mIG5nQ29udHJvbCBpbnRlcm5hbHNcbiAgICAgIGNvbnN0IF9jb250cm9sVmFsdWUgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXG4gICAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSkgfHwgJyc7XG4gICAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG4gICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBfY29udHJvbFZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcbiAgICAgICAgPyB0b2tlbml6ZShcbiAgICAgICAgICBub3JtYWxpemVkUXVlcnksXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgICAgKVxuICAgICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByZXBhcmVNYXRjaGVzKG9wdGlvbnM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaW1pdGVkOiBUeXBlYWhlYWRNYXRjaFtdID0gb3B0aW9ucy5zbGljZSgwLCB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCk7XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSB7XG4gICAgICBsZXQgbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuXG4gICAgICAvLyBleHRyYWN0IGFsbCBncm91cCBuYW1lc1xuICAgICAgY29uc3QgZ3JvdXBzID0gbGltaXRlZFxuICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PlxuICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZClcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcsIGk6IG51bWJlciwgYTogc3RyaW5nW10pID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIGFkZCBncm91cCBoZWFkZXIgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzLnB1c2gobmV3IFR5cGVhaGVhZE1hdGNoKGdyb3VwLCBncm91cCwgdHJ1ZSkpO1xuXG4gICAgICAgIC8vIGFkZCBlYWNoIGl0ZW0gb2YgZ3JvdXAgdG8gYXJyYXkgb2YgbWF0Y2hlc1xuICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcy5jb25jYXQoXG4gICAgICAgICAgbGltaXRlZFxuICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSA9PT0gZ3JvdXBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXRjaGVzID0gbGltaXRlZC5tYXAoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKG9wdGlvbjogYW55KSA9PlxuICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzTWF0Y2hlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwO1xuICB9XG59XG4iXX0=