/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {
      left: 50%;
      transform: translateX(-50%);
    }
    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {
      top: 50%;
      transform: translateY(-50%);
    }
  `]
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig, },
];
function TooltipContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipContainerComponent.ctorParameters;
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.containerClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0M1QyxNQUFNOzs7O0lBV0osWUFBWSxNQUFxQjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7OztJQU5ELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7OztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsU0FBTSxJQUFJLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsV0FBUSxJQUFJLENBQUM7U0FDM0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7S0FDRjs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQ1AsOEdBQThHO29CQUNoSCxjQUFjLEVBQUUsUUFBUTtvQkFDeEIsV0FBVyxFQUFFLFNBQVM7b0JBQ3RCLElBQUksRUFBRSxTQUFTO2lCQUNoQjtnQkFpQkQsUUFBUSxFQUFFOzs7S0FHUDt5QkFsQkQ7Ozs7Ozs7Ozs7Ozs7R0FhRDthQU1GOzs7O1lBbENRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6XG4gICAgICAnXCJ0b29sdGlwIGluIHRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxuICAgICdbYXR0ci5pZF0nOiAndGhpcy5pZCcsXG4gICAgcm9sZTogJ3Rvb2x0aXAnXG4gIH0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICA6aG9zdC50b29sdGlwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIDpob3N0LmJzLXRvb2x0aXAtdG9wIC5hcnJvdywgOmhvc3QuYnMtdG9vbHRpcC1ib3R0b20gLmFycm93IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG4gICAgOmhvc3QuYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdywgOmhvc3QuYnMtdG9vbHRpcC1yaWdodCAuYXJyb3cge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3cgYXJyb3dcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xuXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbYHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH1gXSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5jb250YWluZXJDbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19