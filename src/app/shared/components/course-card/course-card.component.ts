import { Component, Input, Output, EventEmitter } from '@angular/core';

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

@Input()
editable:Boolean=true;

@Input()
 courses:[]=[];

@Output() clickOnShow = new EventEmitter<void>();

@Output() showCourse = new EventEmitter<void>();

@Output() editCourse = new EventEmitter<void>();

@Output() deleteCourse = new EventEmitter<void>();

clickOnShowCourse()
{
  this.clickOnShow.emit();
}

showCourses()
{
  this.showCourse.emit();
}

editCourseData()
{
  this.editCourse.emit();
}

deleteCourseData()
{
  this.deleteCourse.emit();
}

}
