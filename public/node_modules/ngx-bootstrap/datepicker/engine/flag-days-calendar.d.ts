import { DaysCalendarViewModel } from '../models';
export interface FlagDaysCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    daysDisabled: number[];
    hoveredDate: Date;
    selectedDate: Date;
    selectedRange: Date[];
    displayMonths: number;
    monthIndex: number;
}
export declare function flagDaysCalendar(formattedMonth: DaysCalendarViewModel, options: FlagDaysCalendarOptions): DaysCalendarViewModel;
