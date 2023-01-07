import * as AuthActions from './auth.actions';

export interface State {
    loggedIn: boolean,
    instructorData: {
        email: string,
        password: string
    }
}

const initialState: State = {
    loggedIn: false,
    instructorData: {
        email: '',
        password: ''
    }
}

export function authReducer(state: State = initialState, action: AuthActions.AuthActions ) {
    switch (action.type) {
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