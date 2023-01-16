import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from './auth-guards/auth-guard.service';
import { HomeAuthGuard } from './auth-guards/home-protect.service';
import { CoursesComponent } from './instructor-home/courses/courses.component';
import { DashboardComponent } from './instructor-home/dashboard/dashboard.component';
import { CreateCourseComponent } from './instructor-home/create-course/create-course.component';

const routes: Routes = [
  {
    path: 'instructor', children: [
      {
        path: '', canActivate: [HomeAuthGuard], component: InstructorHomeComponent, children: [
          { path: '', component: DashboardComponent },
          { path: 'myCourses', component: CoursesComponent },
          { path: 'createCourse', component: CreateCourseComponent },
        ]
      },
      { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
      { path: 'signup', canActivate: [AuthGuard], component: SignupComponent },
      { path: 'verify/:id/:token', component: VerifyEmailComponent }
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
