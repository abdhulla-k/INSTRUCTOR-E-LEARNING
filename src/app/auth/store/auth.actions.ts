import { Action } from "@ngrx/store"

import { authData } from '../../shared/types/auth-data';

export const LOGIN_START = '[Auth] Login started'
export const LOGIN_END = '[Auth] Login ended'

export class LoginStart implements Action {
    readonly type: string = LOGIN_START;
    constructor(public payload: authData) { }
}

export class LoginEnd implements Action {
    readonly type: string = LOGIN_END;
    constructor(public payload: boolean) {}
}

export type AuthActions =
    LoginStart |
    LoginEnd;