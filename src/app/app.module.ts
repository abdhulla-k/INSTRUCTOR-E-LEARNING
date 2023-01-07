import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './instructor-home/header/header.component';
import { SideBarComponent } from './instructor-home/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { PasswordValidatingDirective } from './shared/directives/password-validate.directive';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    InstructorHomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SideBarComponent,
    PasswordValidatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
