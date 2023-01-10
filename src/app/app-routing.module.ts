import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'instructor', children: [
      { path: '', component: InstructorHomeComponent },
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
