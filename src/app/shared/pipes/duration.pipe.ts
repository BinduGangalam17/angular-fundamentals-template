import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    // Add your code here
    transform(value: number): string {
        let hours = Math.floor(value / 60);
        let minutes = value % 60;
        let hoursStr = hours < 10 ? `0${hours}` : hours;
        let minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${hoursStr}:${minutesStr} hours`;
      }
}
