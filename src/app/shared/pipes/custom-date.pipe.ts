import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform  {
    // Add your code here
    constructor(private datePipe: DatePipe) {}

    /**
     * Returns the date in ISO format - <b>2019-01-01 12:34:56</b>
     */
    transform(value: Date): string {
        return this.datePipe.transform(value, "dd.MM.yyyy") || '';
    }
}
