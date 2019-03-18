/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDatepickerConfig } from './bs-datepicker.config';
var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the datepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _a = tslib_1.__values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDatepickerDirective.propDecorators = {
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "outsideClick": [{ type: Input },],
        "container": [{ type: Input },],
        "outsideEsc": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "bsValue": [{ type: Input },],
        "bsConfig": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "minMode": [{ type: Input },],
        "daysDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDatepickerDirective;
}());
export { BsDatepickerDirective };
function BsDatepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerDirective.propDecorators;
    /**
     * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDatepickerDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDatepickerDirective.prototype.triggers;
    /**
     * Close datepicker on outside click
     * @type {?}
     */
    BsDatepickerDirective.prototype.outsideClick;
    /**
     * A selector specifying the element the datepicker should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    BsDatepickerDirective.prototype.container;
    /** @type {?} */
    BsDatepickerDirective.prototype.outsideEsc;
    /**
     * Emits an event when the datepicker is shown
     * @type {?}
     */
    BsDatepickerDirective.prototype.onShown;
    /**
     * Emits an event when the datepicker is hidden
     * @type {?}
     */
    BsDatepickerDirective.prototype.onHidden;
    /** @type {?} */
    BsDatepickerDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker's content is enabled or not
     * @type {?}
     */
    BsDatepickerDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDatepickerDirective.prototype.maxDate;
    /**
     * Minimum view mode : day, month, or year
     * @type {?}
     */
    BsDatepickerDirective.prototype.minMode;
    /**
     * Disable Certain days in the week
     * @type {?}
     */
    BsDatepickerDirective.prototype.daysDisabled;
    /**
     * Emits when datepicker value has been changed
     * @type {?}
     */
    BsDatepickerDirective.prototype.bsValueChange;
    /** @type {?} */
    BsDatepickerDirective.prototype._subs;
    /** @type {?} */
    BsDatepickerDirective.prototype._datepicker;
    /** @type {?} */
    BsDatepickerDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDatepickerDirective.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDUyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQ3JDLE1BQU0sRUFBRSxTQUFTLEVBQWlCLGdCQUFnQixFQUN0RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBeUcxRCwrQkFBbUIsT0FBMkIsRUFDbEMsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQW9COzs7O3lCQTlGWSxRQUFROzs7Ozt3QkFLOUMsT0FBTzs7Ozs0QkFJSCxJQUFJOzs7Ozt5QkFLUCxNQUFNOzBCQUVMLElBQUk7Ozs7NkJBdUVvQixJQUFJLFlBQVksRUFBRTtxQkFFOUIsRUFBRTs7UUFXbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDakMsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztLQUMzQzswQkF0RkcseUNBQU07Ozs7OztZQUNSLE1B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RSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1NBQ2hFLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1Qjs7Z0JBak9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBTlEsa0JBQWtCO2dCQU5BLFVBQVU7Z0JBQ1IsU0FBUztnQkFBaUIsZ0JBQWdCO2dCQUU3QyxzQkFBc0I7Ozs4QkFjN0MsS0FBSzs2QkFLTCxLQUFLO2lDQUlMLEtBQUs7OEJBS0wsS0FBSzsrQkFFTCxLQUFLOzJCQUtMLEtBQUs7NEJBaUJMLE1BQU07NkJBS04sTUFBTTs0QkFNTixLQUFLOzZCQVlMLEtBQUs7K0JBSUwsS0FBSzs0QkFJTCxLQUFLOzRCQUlMLEtBQUs7NEJBS0wsS0FBSztpQ0FLTCxLQUFLO2tDQUlMLE1BQU07O2dDQXpHVDs7U0FjYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4vbW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlcl0nLFxuICBleHBvcnRBczogJ2JzRGF0ZXBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XG4gIC8qKlxuICAgKiBDbG9zZSBkYXRlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcbiAgICovXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IHRydWU7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVwaWNrZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lciA9ICdib2R5JztcblxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIF9ic1ZhbHVlOiBEYXRlO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcbiAgICovXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBkYXRlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogTWluaW11bSB2aWV3IG1vZGUgOiBkYXksIG1vbnRoLCBvciB5ZWFyXG4gICAqL1xuICBASW5wdXQoKSBtaW5Nb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKipcbiAgICogRGlzYWJsZSBDZXJ0YWluIGRheXMgaW4gdGhlIHdlZWtcbiAgICovXG4gIEBJbnB1dCgpIGRheXNEaXNhYmxlZDogbnVtYmVyW107XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRDb25maWcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRheXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXlzRGlzYWJsZWQgPSB0aGlzLmRheXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBkYXRlcGlja2VyLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb25maWcoKTtcblxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xuXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmdcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxuICAgKi9cbiAgc2V0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdGhpcy5ic0NvbmZpZywge1xuICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXG4gICAgICBkYXlzRGlzYWJsZWQ6IHRoaXMuZGF5c0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXlzRGlzYWJsZWQsXG4gICAgICBtaW5Nb2RlOiB0aGlzLm1pbk1vZGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbk1vZGVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=