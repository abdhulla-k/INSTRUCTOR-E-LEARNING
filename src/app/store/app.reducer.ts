import { ActionReducerMap } from "@ngrx/store";

import * as fromAuthentication from '../auth/store/auth.reducer';
import * as fromCourseCreation from '../instructor-home/store/course.reducer';

export interface AppState {
    authentication: fromAuthentication.State,
    courseActivities: fromCourseCreation.State
}

// trgister every reducers here
export const appReducer: ActionReducerMap<AppState, any> = {
    authentication: fromAuthentication.authReducer,
    courseActivities: fromCourseCreation.courseReducer
}