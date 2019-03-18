/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class BsDatepickerActions {
    /**
     * @return {?}
     */
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    /**
     * @return {?}
     */
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    /**
     * @return {?}
     */
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    /**
     * @param {?} step
     * @return {?}
     */
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    /**
     * @param {?} days
     * @return {?}
     */
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions.decorators = [
    { type: Injectable }
];
function BsDatepickerActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerActions.ctorParameters;
    /** @type {?} */
    BsDatepickerActions.CALCULATE;
    /** @type {?} */
    BsDatepickerActions.FORMAT;
    /** @type {?} */
    BsDatepickerActions.FLAG;
    /** @type {?} */
    BsDatepickerActions.SELECT;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_OFFSET;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_TO;
    /** @type {?} */
    BsDatepickerActions.SET_OPTIONS;
    /** @type {?} */
    BsDatepickerActions.HOVER;
    /** @type {?} */
    BsDatepickerActions.CHANGE_VIEWMODE;
    /** @type {?} */
    BsDatepickerActions.SET_MIN_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_MAX_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_DAYSDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_IS_DISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_LOCALE;
    /** @type {?} */
    BsDatepickerActions.SELECT_RANGE;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXM0MsTUFBTTs7OztJQW9CSixTQUFTO1FBQ1AsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2hEOzs7O0lBRUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUM3Qzs7OztJQUVELElBQUk7UUFDRixNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDM0M7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVU7UUFDZixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtZQUNoQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBMkI7UUFDeEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxXQUFXO1lBQ3JDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELFlBQVksQ0FBQyxJQUFjO1FBQ3pCLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxlQUFlO1lBQ3pDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQztRQUN6QyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsV0FBVztZQUNyQyxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO0tBQ0g7Ozs7O0lBR0QsV0FBVyxDQUFDLEtBQWE7UUFDdkIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQXFCO1FBQzVCLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO1lBQy9CLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNsRCxDQUFDO0tBQ0g7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVU7UUFDaEIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVU7UUFDaEIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDekIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQjtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtZQUN6QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtZQUNwQyxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDO0tBQ0g7O2dDQWxIMkIscUNBQXFDOzZCQUN4Qyx1Q0FBdUM7MkJBQ3pDLHdCQUF3Qjs2QkFDdEIsMEJBQTBCO3NDQUNqQiw4QkFBOEI7a0NBQ2xDLCtCQUErQjtrQ0FDL0Isb0NBQW9DOzRCQUMxQyx5QkFBeUI7c0NBQ2YsK0JBQStCO21DQUVsQywyQkFBMkI7bUNBQzNCLDJCQUEyQjt1Q0FDdkIsZ0NBQWdDO3NDQUNqQyw4QkFBOEI7aUNBRW5DLG9DQUFvQzttQ0FFbEMsc0NBQXNDOztZQW5CdEUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQWN0aW9ucyB7XG4gIHN0YXRpYyByZWFkb25seSBDQUxDVUxBVEUgPSAnW2RhdGVwaWNrZXJdIGNhbGN1bGF0ZSBkYXRlcyBtYXRyaXgnO1xuICBzdGF0aWMgcmVhZG9ubHkgRk9STUFUID0gJ1tkYXRlcGlja2VyXSBmb3JtYXQgZGF0ZXBpY2tlciB2YWx1ZXMnO1xuICBzdGF0aWMgcmVhZG9ubHkgRkxBRyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGZsYWdzJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdbZGF0ZXBpY2tlcl0gc2VsZWN0IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfT0ZGU0VUID0gJ1tkYXRlcGlja2VyXSBzaGlmdCB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfVE8gPSAnW2RhdGVwaWNrZXJdIGNoYW5nZSB2aWV3IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX09QVElPTlMgPSAnW2RhdGVwaWNrZXJdIHVwZGF0ZSByZW5kZXIgb3B0aW9ucyc7XG4gIHN0YXRpYyByZWFkb25seSBIT1ZFUiA9ICdbZGF0ZXBpY2tlcl0gaG92ZXIgZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfVklFV01PREUgPSAnW2RhdGVwaWNrZXJdIHN3aXRjaCB2aWV3IG1vZGUnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUlOX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtaW4gZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUFYX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtYXggZGF0ZSc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFZU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF5cyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVF9SQU5HRSA9ICdbZGF0ZXJhbmdlcGlja2VyXSBzZWxlY3QgZGF0ZXMgcmFuZ2UnO1xuXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFIH07XG4gIH1cblxuICBmb3JtYXQoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xuICB9XG5cbiAgZmxhZygpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xuICB9XG5cbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXG4gICAgICBwYXlsb2FkOiBldmVudFxuICAgIH07XG4gIH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXG4gICAgICBwYXlsb2FkOiBzdGVwXG4gICAgfTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxuICAgICAgcGF5bG9hZDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBob3ZlckRheShldmVudDogQ2VsbEhvdmVyRXZlbnQpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxuICAgICAgcGF5bG9hZDogZXZlbnQuaXNIb3ZlcmVkID8gZXZlbnQuY2VsbC5kYXRlIDogbnVsbFxuICAgIH07XG4gIH1cblxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURSxcbiAgICAgIHBheWxvYWQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGRheXNEaXNhYmxlZChkYXlzOiBudW1iZXJbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRheXNcbiAgICB9O1xuICB9XG5cbiAgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0lTX0RJU0FCTEVELFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTE9DQUxFLFxuICAgICAgcGF5bG9hZDogbG9jYWxlXG4gICAgfTtcbiAgfVxufVxuIl19