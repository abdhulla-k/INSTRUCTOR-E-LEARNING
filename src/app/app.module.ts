import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './instructor-home/header/header.component';
import { SideBarComponent } from './instructor-home/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidatingDirective } from './shared/directives/password-validate.directive';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { CourseEffects } from './instructor-home/store/course.effects';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { CoursesComponent } from './instructor-home/courses/courses.component';
import { DashboardComponent } from './instructor-home/dashboard/dashboard.component';
import { CourseComponent } from './instructor-home/courses/course/course.component';
import { CreateCourseComponent } from './instructor-home/create-course/create-course.component';
import { CourseDetailsComponent } from './instructor-home/courses/course/course-details/course-details.component';
import { FooterComponent } from './instructor-home/footer/footer.component';
import { ModuleComponent } from './instructor-home/courses/course/course-details/module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    InstructorHomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SideBarComponent,
    PasswordValidatingDirective,
    VerifyEmailComponent,
    CoursesComponent,
    DashboardComponent,
    CourseComponent,
    CreateCourseComponent,
    CourseDetailsComponent,
    FooterComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, CourseEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
