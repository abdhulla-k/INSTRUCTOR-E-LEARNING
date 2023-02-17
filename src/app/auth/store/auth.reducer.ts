import * as AuthActions from './auth.actions';

export interface State {
    loggedIn: boolean,
    emailVerified: boolean,
    instructorData: {
        email: string,
        password: string
    },
    signupData: {
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    }
}

const initialState: State = {
    loggedIn: false,
    emailVerified: false,
    instructorData: {
        email: '',
        password: ''
    },
    signupData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}

export function authReducer(state: State = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.VERIFY_EMAIL_START:
            return {
                ...state
            }
        case AuthActions.VERIFY_EMAIL_COMPLETED:
            return {
                ...state,
                emailVerified: action.payload === true ? true : false
            }
        case AuthActions.SIGNUP_START:
            return {
                ...state
            }
        case AuthActions.SIGNUP_END:
            return {
                ...state
            }
        case AuthActions.LOGIN_START:
            return {
                ...state
            }
        case AuthActions.LOGIN_END:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}