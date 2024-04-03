import { Routes } from '@angular/router';
import { CourseCardComponent, LoginFormComponent, RegistrationFormComponent } from './shared/components';
import { CourseListComponent } from './shared/components/course-list/course-list.component';
import { AddcourseComponent } from './shared/components/addcourse/addcourse.component';
import { EditcourseComponent } from './shared/components/editcourse/editcourse.component';
import { CourseDetailsComponent } from './shared/components/course-details/course-details.component';

export const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'registration', component: RegistrationFormComponent },
    {path:'courses', component: CourseListComponent},
    {path:'**', component: CourseListComponent}
];
