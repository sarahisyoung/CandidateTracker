import { ElementRef, EventEmitter, Injector, TemplateRef, ApplicationRef, ComponentFactoryResolver, Injectable, NgZone } from '@angular/core';
import { listenToTriggersV2, registerEscClick, registerOutsideClick } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
BsComponentRef = /** @class */ (function () {
    function BsComponentRef() {
    }
    return BsComponentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(/* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    nodes, viewRef, /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = /**
     * @param {?} compType
     * @return {?}
     */
    function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var /** @type {?} */ injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(/** @type {?} */ (this.container))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = /**
     * @param {?} listenOpts
     * @return {?}
     */
    function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var /** @type {?} */ hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var /** @type {?} */ show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var /** @type {?} */ toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._removeGlobalListener = /**
     * @return {?}
     */
    function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    ComponentLoader.prototype.attachInline = /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    function (vRef, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._registerOutsideClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var /** @type {?} */ target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = registerOutsideClick(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
        if (this._listenOpts.outsideEsc) {
            var /** @type {?} */ target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: function () { return _this._listenOpts.hide(); }
            });
        }
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = /**
     * @return {?}
     */
    function () {
        return this._innerComponent;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = /**
     * @return {?}
     */
    function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = /**
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    function (/* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    content, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    context, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    initialState) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                var /** @type {?} */ _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            var /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var /** @type {?} */ modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: NgZone, },
        { type: Injector, },
        { type: PositioningService, },
        { type: ApplicationRef, },
    ]; };
    return ComponentLoaderFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb21wb25lbnQtbG9hZGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXIvYnMtY29tcG9uZW50LXJlZi5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2NvbnRlbnQtcmVmLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQnNDb21wb25lbnRSZWY8VD4ge1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VD47XG4gIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG59XG4iLCIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudFJlZiwgVmlld1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZiB7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIG5vZGVzOiBhbnlbXTtcbiAgdmlld1JlZj86IFZpZXdSZWY7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgbm9kZXM6IGFueVtdLFxuICAgIHZpZXdSZWY/OiBWaWV3UmVmLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT5cbiAgKSB7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMudmlld1JlZiA9IHZpZXdSZWY7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcbi8vIHRvZG86IGFkZCBkZWxheSBzdXBwb3J0XG4vLyB0b2RvOiBtZXJnZSBldmVudHMgb25TaG93LCBvblNob3duLCBldGMuLi5cbi8vIHRvZG86IGFkZCBnbG9iYWwgcG9zaXRpb25pbmcgY29uZmlndXJhdGlvbj9cbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdG9yLFxuICBOZ1pvbmUsXG4gIFJlbmRlcmVyMixcbiAgU3RhdGljUHJvdmlkZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQb3NpdGlvbmluZ09wdGlvbnMsIFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQge1xuICBsaXN0ZW5Ub1RyaWdnZXJzVjIsXG4gIHJlZ2lzdGVyRXNjQ2xpY2ssXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXG59IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBMaXN0ZW5PcHRpb25zIH0gZnJvbSAnLi9saXN0ZW4tb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlcjxUPiB7XG4gIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW5zdGFuY2U6IFQ7XG4gIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcbiAgX2lubGluZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxUPjtcblxuICBwcml2YXRlIF9wcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmO1xuICBwcml2YXRlIF9pbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIHByaXZhdGUgX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbjogRnVuY3Rpb247XG5cbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2lzSGlkaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNIaWRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgY29tcG9uZW50LiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaG1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByaXZhdGUgY29udGFpbmVyOiBzdHJpbmcgfCBFbGVtZW50UmVmIHwgYW55O1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBwcml2YXRlIHRyaWdnZXJzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIF9nbG9iYWxMaXN0ZW5lciA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogRG8gbm90IHVzZSB0aGlzIGRpcmVjdGx5LCBpdCBzaG91bGQgYmUgaW5zdGFuY2VkIHZpYVxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBUeXBlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGJlaGF2aW91cjogdG8gdGFyZ2V0IGVsZW1lbnQsIGBib2R5YCwgY3VzdG9tIGVsZW1lbnRcbiAgdG8oY29udGFpbmVyPzogc3RyaW5nIHwgRWxlbWVudFJlZik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBvc2l0aW9uKG9wdHM/OiBQb3NpdGlvbmluZ09wdGlvbnMpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XG4gICAgdGhpcy5fZWxlbWVudFJlZiA9IChvcHRzLnRhcmdldCBhcyBFbGVtZW50UmVmKSB8fCB0aGlzLl9lbGVtZW50UmVmO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm92aWRlKHByb3ZpZGVyOiBTdGF0aWNQcm92aWRlcik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5fcHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0b2RvOiBhcHBlbmRDaGlsZCB0byBlbGVtZW50IG9yIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpXG5cbiAgc2hvdyhvcHRzOiB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRlbnQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb250ZXh0PzogYW55O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBpbml0aWFsU3RhdGU/OiBhbnk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9XG4gICk6IENvbXBvbmVudFJlZjxUPiB7XG5cbiAgICB0aGlzLl9zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XG4gICAgICB0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihvcHRzLmNvbnRlbnQsIG9wdHMuY29udGV4dCwgb3B0cy5pbml0aWFsU3RhdGUpO1xuXG4gICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHByb3ZpZGVyczogdGhpcy5fcHJvdmlkZXJzLFxuICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IsIHRoaXMuX2NvbnRlbnRSZWYubm9kZXMpO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgLy8gdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICAgLy8gICAuY3JlYXRlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEZhY3RvcnksIDAsIGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLCBvcHRzKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lciBhcyBzdHJpbmcpXG4gICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5jb250YWluZXIgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gbWFudWFsbHkgaW52b2tlIGNoYW5nZSBkZXRlY3Rpb24gc2luY2UgZXZlbnRzIHJlZ2lzdGVyZWRcbiAgICAgIC8vIHZpYVxuICAgICAgLy8gUmVuZGVyZXI6Omxpc3RlbigpIGFyZSBub3QgcGlja2VkIHVwIGJ5IGNoYW5nZSBkZXRlY3Rpb24gd2l0aCB0aGVcbiAgICAgIC8vIE9uUHVzaCBzdHJhdGVneVxuICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3Rlck91dHNpZGVDbGljaygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcbiAgfVxuXG4gIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuXG4gICAgY29uc3QgY29tcG9uZW50RWwgPSB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICBjb21wb25lbnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbXBvbmVudEVsKTtcbiAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZiAmJiB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fY29udGVudFJlZi52aWV3UmVmKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZikge1xuICAgICAgdGhpcy5fY29udGVudFJlZi52aWV3UmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb250ZW50UmVmID0gbnVsbDtcbiAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBudWxsO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVyKCk7XG5cbiAgICB0aGlzLm9uSGlkZGVuLmVtaXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcblxuICAgIGlmICh0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4pIHtcbiAgICAgIHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbigpO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RlbihsaXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLnRyaWdnZXJzID0gbGlzdGVuT3B0cy50cmlnZ2VycyB8fCB0aGlzLnRyaWdnZXJzO1xuICAgIHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUNsaWNrID0gbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2s7XG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjID0gbGlzdGVuT3B0cy5vdXRzaWRlRXNjO1xuICAgIGxpc3Rlbk9wdHMudGFyZ2V0ID0gbGlzdGVuT3B0cy50YXJnZXQgfHwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgaGlkZSA9ICh0aGlzLl9saXN0ZW5PcHRzLmhpZGUgPSAoKSA9PlxuICAgICAgbGlzdGVuT3B0cy5oaWRlID8gbGlzdGVuT3B0cy5oaWRlKCkgOiB2b2lkIHRoaXMuaGlkZSgpKTtcbiAgICBjb25zdCBzaG93ID0gKHRoaXMuX2xpc3Rlbk9wdHMuc2hvdyA9IChyZWdpc3RlckhpZGU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBsaXN0ZW5PcHRzLnNob3cgPyBsaXN0ZW5PcHRzLnNob3cocmVnaXN0ZXJIaWRlKSA6IHRoaXMuc2hvdyhyZWdpc3RlckhpZGUpO1xuICAgICAgcmVnaXN0ZXJIaWRlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGUgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgdGhpcy5pc1Nob3duID8gaGlkZSgpIDogc2hvdyhyZWdpc3RlckhpZGUpO1xuICAgIH07XG5cbiAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4gPSBsaXN0ZW5Ub1RyaWdnZXJzVjIodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgIHRhcmdldDogbGlzdGVuT3B0cy50YXJnZXQsXG4gICAgICB0cmlnZ2VyczogbGlzdGVuT3B0cy50cmlnZ2VycyxcbiAgICAgIHNob3csXG4gICAgICBoaWRlLFxuICAgICAgdG9nZ2xlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZW1vdmVHbG9iYWxMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fZ2xvYmFsTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyKCk7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoSW5saW5lKFxuICAgIHZSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy5faW5saW5lVmlld1JlZiA9IHZSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmIHx8ICF0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gd2h5OiBzaG91bGQgcnVuIGFmdGVyIGZpcnN0IGV2ZW50IGJ1YmJsZVxuICAgIGlmICh0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljaykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIgPSByZWdpc3Rlck91dHNpZGVDbGljayh0aGlzLl9yZW5kZXJlciwge1xuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudF0sXG4gICAgICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayxcbiAgICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJFc2NDbGljayh0aGlzLl9yZW5kZXJlciwge1xuICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICBvdXRzaWRlRXNjOiB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVFc2MsXG4gICAgICAgIGhpZGU6ICgpID0+IHRoaXMuX2xpc3Rlbk9wdHMuaGlkZSgpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRJbm5lckNvbXBvbmVudCgpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9pbm5lckNvbXBvbmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnRleHQ/OiBhbnksXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGluaXRpYWxTdGF0ZT86IGFueVxuICApOiBDb250ZW50UmVmIHtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgY29uc3QgX3ZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XG4gICAgICAgIF92aWV3UmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xuICAgICAgfVxuICAgICAgY29uc3Qgdmlld1JlZiA9IGNvbnRlbnQuY3JlYXRlRW1iZWRkZWRWaWV3KHt9KTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29udGVudFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbW9kYWxDb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycyxcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIGluaXRpYWxTdGF0ZSk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihcbiAgICAgICAgW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dLFxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXG4gICAgICAgIGNvbXBvbmVudFJlZlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1t0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGAke2NvbnRlbnR9YCldXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxuICBOZ1pvbmUsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcG9zU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBfZWxlbWVudFJlZlxuICAgKiBAcGFyYW0gX3ZpZXdDb250YWluZXJSZWZcbiAgICogQHBhcmFtIF9yZW5kZXJlclxuICAgKi9cbiAgY3JlYXRlTG9hZGVyPFQ+KF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRMb2FkZXI8VD4oXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgIF9yZW5kZXJlcixcbiAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgdGhpcy5faW5qZWN0b3IsXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICB0aGlzLl9uZ1pvbmUsXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZixcbiAgICAgIHRoaXMuX3Bvc1NlcnZpY2VcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQUE7Ozt5QkFGQTtJQUtDOzs7Ozs7Ozs7O0FDRUQsSUFBQTtJQU9FOztJQUVFLEtBQVksRUFDWixPQUFpQjs7SUFFakIsWUFBZ0M7UUFFaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7S0FDbEM7cUJBeEJIO0lBeUJDOzs7Ozs7QUNyQkQ7OztBQTZCQTs7O0FBQUE7NkJBMERZLG1CQUNBLFdBQ0EsYUFDQSxXQUNBLDJCQUNBLFNBQ0EsaUJBQ0E7UUFQ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