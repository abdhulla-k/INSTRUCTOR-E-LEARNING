import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from 'rxjs/operators';

import * as AuthActions from './auth.actions';

type loginResponse = { jwtToken: string, message: string, loggedIn: boolean, time: number };

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
                            // Dispatch a success action with the response data
                            if (response.jwtToken) {
                                // save the token in local storage
                                localStorage.setItem('userData', JSON.stringify(response))
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

    baseRoute = 'http://localhost:3000/instructor';

    constructor(private actions$: Actions, private http: HttpClient, private router: Router) { }
}