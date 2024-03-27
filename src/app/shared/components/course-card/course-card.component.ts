import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  title!: string
  description!: string
  creationDate!: Date
  duration!: number
  authors!: string[]

onSearch(event:string)
{
  console.log(event);
}

}

