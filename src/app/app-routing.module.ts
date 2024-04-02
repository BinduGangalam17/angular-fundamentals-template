import { Routes } from '@angular/router';
import { CourseCardComponent, LoginFormComponent, RegistrationFormComponent } from './shared/components';

export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: '/login', component: LoginFormComponent },
    { path: '/registration', component: RegistrationFormComponent },
    {path:'/courses', component: CourseCardComponent}
];
