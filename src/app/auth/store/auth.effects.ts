import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from 'rxjs/operators';

import * as AuthActions from './auth.actions';

type loginResponse = { jwtToken: string, message: string, loggedIn: boolean, time: number };
type singupResponse = { sigupStatus: boolean, message: string };
type emailVerifyResponse = { message: string, status: boolean }

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.LOGIN_START),
            switchMap((authData: AuthActions.LoginStart) => {
                return this.http
                    .post<loginResponse>(
                        `${this.baseRoute}/login`,
                        {
                            email: authData.payload.email,
                            password: authData.payload.password
                        }
                    )
                    .pipe(
                        map(response => {
                          console.log(response)
                            // Dispatch a success action with the response data
                            if (response.jwtToken) {
                                // save the token in local storage
                                localStorage.setItem('instructorData', JSON.stringify(response))
                                // set a timer to clear the local Storage
                                setTimeout(() => {
                                    localStorage.clear();
                                }, response.time)
                                // navigate to user home
                                this.router.navigate(['/instructor/']);
                                // make loggedInStatus true. Because login process successfully completed
                                return new AuthActions.LoginEnd(true);
                            } else {
                                // make loggedInStatus false. Because login failed
                                return new AuthActions.LoginEnd(false);
                            }
                        })
                    )
            })
        )
    );

    signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SIGNUP_START),
      switchMap((authData: AuthActions.SignupStart) => {
        console.log('started signing up')
        return this.http
          .post<singupResponse>(
            `${this.baseRoute}/singup`,
            {
              name: authData.payload.name,
              email: authData.payload.email,
              password: authData.payload.password
            }
          )
          .pipe(
            map(response => {
              console.log('ended')
              // Dispatch a success action with the response data
              if (response.sigupStatus) {
                // navigate to instructor login
                this.router.navigate(['/instructor/login']);
                return new AuthActions.SignupEnd(true);
              } else {
                return new AuthActions.SignupEnd(false);
              }
            })
          )
      })
    )
  );

  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.VERIFY_EMAIL_START),
      switchMap((verificationData: AuthActions.VerifyEmailStart) => {
        return this.http
          .get<emailVerifyResponse>(
            `${this.baseRoute}/verify/${verificationData.payload.id}/${verificationData.payload.token}`
          )
          .pipe(
            map(response => {
              // Check verified or not
              if (response.status) {
                console.log(response)
                // change the status of verified
                return new AuthActions.VerificationConplete(true);
              } else {
                // change the status of verified
                console.log(response)
                return new AuthActions.VerificationConplete(false);
              }
            })
          )
      })
    )
  );

    baseRoute = 'http://localhost:3000/instructor';

    constructor(private actions$: Actions, private http: HttpClient, private router: Router) { }
}