import { Action } from "@ngrx/store"

import { authData } from '../../shared/types/auth-data';

export const VERIFY_EMAIL_START = '[Auth] Verify Email Request'
export const VERIFY_EMAIL_COMPLETED = '[Auth] Verify Email Response Got'
export const LOGIN_START = '[Auth] Login started';
export const LOGIN_END = '[Auth] Login ended';
export const SIGNUP_START = '[Auth] Signup started';
export const SIGNUP_END = '[Auth] Sgnup ended';

export class VerifyEmailStart implements Action {
    readonly type = VERIFY_EMAIL_START;
    constructor (public payload: {
        id: string,
        token: string
    }) {}
}

export class VerificationConplete implements Action {
    readonly type = VERIFY_EMAIL_COMPLETED;
    constructor (public payload: boolean) {}
}

export class LoginStart implements Action {
    readonly type: string = LOGIN_START;
    constructor(public payload: authData) { }
}

export class LoginEnd implements Action {
    readonly type: string = LOGIN_END;
    constructor(public payload: boolean) { }
}

export class SignupStart implements Action {
    readonly type: string = SIGNUP_START;
    constructor(public payload: {
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }) { }
}

export class SignupEnd implements Action {
    readonly type: string = SIGNUP_START;
    constructor(public payload: boolean) { }
}

export type AuthActions =
    VerifyEmailStart |
    VerificationConplete |
    LoginStart |
    LoginEnd |
    SignupStart |
    SignupEnd;