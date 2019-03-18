(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/component-loader', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap']['component-loader'] = {}),global.ng.core,global.utils,global.positioning));
}(this, (function (exports,core,utils,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ BsComponentRef = (function () {
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
    var ContentRef = (function () {
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
    var /**
     * @template T
     */ ComponentLoader = (function () {
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._injector = _injector;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._applicationRef = _applicationRef;
            this._posService = _posService;
            this.onBeforeShow = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onShown = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onBeforeHide = new core.EventEmitter();
            this.onHidden = new core.EventEmitter();
            this._providers = [];
            this._isHiding = false;
            this._listenOpts = {};
            this._globalListener = Function.prototype;
        }
        Object.defineProperty(ComponentLoader.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
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
                this._elementRef = ((opts.target)) || this._elementRef;
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
                if (opts === void 0) {
                    opts = {};
                }
                this._subscribePositioning();
                this._innerComponent = null;
                if (!this._componentRef) {
                    this.onBeforeShow.emit();
                    this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
                    var /** @type {?} */ injector = core.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
                    this._applicationRef.attachView(this._componentRef.hostView);
                    // this._componentRef = this._viewContainerRef
                    //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
                    this.instance = this._componentRef.instance;
                    Object.assign(this._componentRef.instance, opts);
                    if (this.container instanceof core.ElementRef) {
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
                this._unregisterListenersFn = utils.listenToTriggersV2(this._renderer, {
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
                        _this._globalListener = utils.registerOutsideClick(_this._renderer, {
                            targets: [target_1, _this._elementRef.nativeElement],
                            outsideClick: _this._listenOpts.outsideClick,
                            hide: function () { return _this._listenOpts.hide(); }
                        });
                    });
                }
                if (this._listenOpts.outsideEsc) {
                    var /** @type {?} */ target = this._componentRef.location.nativeElement;
                    this._globalListener = utils.registerEscClick(this._renderer, {
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
                if (content instanceof core.TemplateRef) {
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
                    var /** @type {?} */ modalContentInjector = core.Injector.create({
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
    var ComponentLoaderFactory = (function () {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ComponentLoaderFactory.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
                { type: core.NgZone, },
                { type: core.Injector, },
                { type: positioning.PositioningService, },
                { type: core.ApplicationRef, },
            ];
        };
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

    exports.BsComponentRef = BsComponentRef;
    exports.ComponentLoader = ComponentLoader;
    exports.ComponentLoaderFactory = ComponentLoaderFactory;
    exports.ContentRef = ContentRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb21wb25lbnQtbG9hZGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2JzLWNvbXBvbmVudC1yZWYuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb250ZW50LXJlZi5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEJzQ29tcG9uZW50UmVmPFQ+IHtcbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+O1xuICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xufVxuIiwiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRSZWYge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBub2RlczogYW55W107XG4gIHZpZXdSZWY/OiBWaWV3UmVmO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIG5vZGVzOiBhbnlbXSxcbiAgICB2aWV3UmVmPzogVmlld1JlZixcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xuICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+XG4gICkge1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxuLy8gdG9kbzogbWVyZ2UgZXZlbnRzIG9uU2hvdywgb25TaG93biwgZXRjLi4uXG4vLyB0b2RvOiBhZGQgZ2xvYmFsIHBvc2l0aW9uaW5nIGNvbmZpZ3VyYXRpb24/XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUG9zaXRpb25pbmdPcHRpb25zLCBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuaW1wb3J0IHtcbiAgbGlzdGVuVG9UcmlnZ2Vyc1YyLFxuICByZWdpc3RlckVzY0NsaWNrLFxuICByZWdpc3Rlck91dHNpZGVDbGlja1xufSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuaW1wb3J0IHsgQ29udGVudFJlZiB9IGZyb20gJy4vY29udGVudC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgTGlzdGVuT3B0aW9ucyB9IGZyb20gJy4vbGlzdGVuLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXI8VD4ge1xuICBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBvbkJlZm9yZUhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGluc3RhbmNlOiBUO1xuICBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47XG4gIF9pbmxpbmVWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8VD47XG5cbiAgcHJpdmF0ZSBfcHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdID0gW107XG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VD47XG4gIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29udGVudFJlZjogQ29udGVudFJlZjtcbiAgcHJpdmF0ZSBfaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPjtcblxuICBwcml2YXRlIF91bnJlZ2lzdGVyTGlzdGVuZXJzRm46IEZ1bmN0aW9uO1xuXG4gIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9pc0hpZGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuX2NvbXBvbmVudFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2lzSGlkaW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIGNvbXBvbmVudC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgcHJpdmF0ZSBhdHRhY2htZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgcHJpdmF0ZSB0cmlnZ2Vyczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2xpc3Rlbk9wdHM6IExpc3Rlbk9wdGlvbnMgPSB7fTtcbiAgcHJpdmF0ZSBfZ2xvYmFsTGlzdGVuZXIgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIERvIG5vdCB1c2UgdGhpcyBkaXJlY3RseSwgaXQgc2hvdWxkIGJlIGluc3RhbmNlZCB2aWFcbiAgICogYENvbXBvbmVudExvYWRGYWN0b3J5LmF0dGFjaGBcbiAgICogQGludGVybmFsXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfcG9zU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXG4gICkge31cblxuICBhdHRhY2goY29tcFR5cGU6IFR5cGU8VD4pOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wVHlwZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBiZWhhdmlvdXI6IHRvIHRhcmdldCBlbGVtZW50LCBgYm9keWAsIGN1c3RvbSBlbGVtZW50XG4gIHRvKGNvbnRhaW5lcj86IHN0cmluZyB8IEVsZW1lbnRSZWYpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwb3NpdGlvbihvcHRzPzogUG9zaXRpb25pbmdPcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICB0aGlzLmF0dGFjaG1lbnQgPSBvcHRzLmF0dGFjaG1lbnQgfHwgdGhpcy5hdHRhY2htZW50O1xuICAgIHRoaXMuX2VsZW1lbnRSZWYgPSAob3B0cy50YXJnZXQgYXMgRWxlbWVudFJlZikgfHwgdGhpcy5fZWxlbWVudFJlZjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdmlkZShwcm92aWRlcjogU3RhdGljUHJvdmlkZXIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX3Byb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdG9kbzogYXBwZW5kQ2hpbGQgdG8gZWxlbWVudCBvciBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKVxuXG4gIHNob3cob3B0czoge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgY29udGV4dD86IGFueTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgaW5pdGlhbFN0YXRlPzogYW55O1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fVxuICApOiBDb21wb25lbnRSZWY8VD4ge1xuXG4gICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcbiAgICB0aGlzLl9pbm5lckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5vbkJlZm9yZVNob3cuZW1pdCgpO1xuICAgICAgdGhpcy5fY29udGVudFJlZiA9IHRoaXMuX2dldENvbnRlbnRSZWYob3B0cy5jb250ZW50LCBvcHRzLmNvbnRleHQsIG9wdHMuaW5pdGlhbFN0YXRlKTtcblxuICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycyxcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgIC8vIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICAgIC8vICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSwgb3B0cyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgPT09ICdib2R5JyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIgYXMgc3RyaW5nKVxuICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuY29udGFpbmVyICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGludm9rZSBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGV2ZW50cyByZWdpc3RlcmVkXG4gICAgICAvLyB2aWFcbiAgICAgIC8vIFJlbmRlcmVyOjpsaXN0ZW4oKSBhcmUgbm90IHBpY2tlZCB1cCBieSBjaGFuZ2UgZGV0ZWN0aW9uIHdpdGggdGhlXG4gICAgICAvLyBPblB1c2ggc3RyYXRlZ3lcbiAgICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLl9pbm5lckNvbXBvbmVudCA9IHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVnaXN0ZXJPdXRzaWRlQ2xpY2soKTtcblxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRSZWY7XG4gIH1cblxuICBoaWRlKCk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMub25CZWZvcmVIaWRlLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29tcG9uZW50RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb21wb25lbnRFbCk7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZShcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29udGVudFJlZiA9IG51bGw7XG4gICAgdGhpcy5fY29tcG9uZW50UmVmID0gbnVsbDtcbiAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcigpO1xuXG4gICAgdGhpcy5vbkhpZGRlbi5lbWl0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XG5cbiAgICBpZiAodGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKSB7XG4gICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcbiAgICB9XG4gIH1cblxuICBsaXN0ZW4obGlzdGVuT3B0czogTGlzdGVuT3B0aW9ucyk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgdGhpcy50cmlnZ2VycyA9IGxpc3Rlbk9wdHMudHJpZ2dlcnMgfHwgdGhpcy50cmlnZ2VycztcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayA9IGxpc3Rlbk9wdHMub3V0c2lkZUNsaWNrO1xuICAgIHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYyA9IGxpc3Rlbk9wdHMub3V0c2lkZUVzYztcbiAgICBsaXN0ZW5PcHRzLnRhcmdldCA9IGxpc3Rlbk9wdHMudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGhpZGUgPSAodGhpcy5fbGlzdGVuT3B0cy5oaWRlID0gKCkgPT5cbiAgICAgIGxpc3Rlbk9wdHMuaGlkZSA/IGxpc3Rlbk9wdHMuaGlkZSgpIDogdm9pZCB0aGlzLmhpZGUoKSk7XG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgbGlzdGVuT3B0cy5zaG93ID8gbGlzdGVuT3B0cy5zaG93KHJlZ2lzdGVySGlkZSkgOiB0aGlzLnNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICAgIHJlZ2lzdGVySGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKHJlZ2lzdGVySGlkZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XG4gICAgICB0YXJnZXQ6IGxpc3Rlbk9wdHMudGFyZ2V0LFxuICAgICAgdHJpZ2dlcnM6IGxpc3Rlbk9wdHMudHJpZ2dlcnMsXG4gICAgICBzaG93LFxuICAgICAgaGlkZSxcbiAgICAgIHRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fZ2xvYmFsTGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaElubGluZShcbiAgICB2UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxuICApOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHRoaXMuX2lubGluZVZpZXdSZWYgPSB2UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWdpc3Rlck91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZiB8fCAhdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHdoeTogc2hvdWxkIHJ1biBhZnRlciBmaXJzdCBldmVudCBidWJibGVcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxuICAgICAgICAgIG91dHNpZGVDbGljazogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2ssXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcbiAgICAgICAgdGFyZ2V0czogW3RhcmdldCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XSxcbiAgICAgICAgb3V0c2lkZUVzYzogdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjLFxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5uZXJDb21wb25lbnQoKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fem9uZVN1YnNjcmlwdGlvbiB8fCAhdGhpcy5hdHRhY2htZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbiA9IHRoaXMuX25nWm9uZS5vblN0YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG9zU2VydmljZS5wb3NpdGlvbih7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbixcbiAgICAgICAgdGFyZ2V0OiB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICBhdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnQsXG4gICAgICAgIGFwcGVuZFRvQm9keTogdGhpcy5jb250YWluZXIgPT09ICdib2R5J1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fem9uZVN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb250ZW50UmVmKFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb250ZXh0PzogYW55LFxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBpbml0aWFsU3RhdGU/OiBhbnlcbiAgKTogQ29udGVudFJlZiB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW10pO1xuICAgIH1cblxuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIGNvbnN0IF92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICAgICAgIC5jcmVhdGVFbWJlZGRlZFZpZXc8VGVtcGxhdGVSZWY8VD4+KGNvbnRlbnQsIGNvbnRleHQpO1xuICAgICAgICBfdmlld1JlZi5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW192aWV3UmVmLnJvb3ROb2Rlc10sIF92aWV3UmVmKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyh7fSk7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjb250ZW50Q21wdEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG1vZGFsQ29udGVudEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb250ZW50Q21wdEZhY3RvcnkuY3JlYXRlKG1vZGFsQ29udGVudEluamVjdG9yKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50UmVmLmluc3RhbmNlLCBpbml0aWFsU3RhdGUpO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoXG4gICAgICAgIFtbY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdXSxcbiAgICAgICAgY29tcG9uZW50UmVmLmhvc3RWaWV3LFxuICAgICAgICBjb21wb25lbnRSZWZcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtbdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChgJHtjb250ZW50fWApXV0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvcixcbiAgTmdab25lLCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWZcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBfcmVuZGVyZXJcbiAgICovXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXIsXG4gICAgICBfZWxlbWVudFJlZixcbiAgICAgIHRoaXMuX2luamVjdG9yLFxuICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgdGhpcy5fbmdab25lLFxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYsXG4gICAgICB0aGlzLl9wb3NTZXJ2aWNlXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkluamVjdG9yIiwiRWxlbWVudFJlZiIsImxpc3RlblRvVHJpZ2dlcnNWMiIsInJlZ2lzdGVyT3V0c2lkZUNsaWNrIiwicmVnaXN0ZXJFc2NDbGljayIsIlRlbXBsYXRlUmVmIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIk5nWm9uZSIsIlBvc2l0aW9uaW5nU2VydmljZSIsIkFwcGxpY2F0aW9uUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O1FBQUE7Ozs2QkFGQTtRQUtDOzs7Ozs7Ozs7O0FDRUQsUUFBQTtRQU9FOztRQUVFLEtBQVksRUFDWixPQUFpQjs7UUFFakIs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