import * as CourseActions from './course.actions';

export interface State {
    courseCreationStatus: boolean;
    courseId: string
}

const initialState: State = {
    courseCreationStatus: false,
    courseId: ''
}

export function courseReducer(state: State = initialState, action: CourseActions.CourseActions) {
    switch(action.type) {
        case CourseActions.COURSE_CREATION_START:
            return {
                ...state,
                courseCreationStatus: true
            }
        case CourseActions.COURSE_CREATION_END:
            return {
                ...state,
                courseCreationStatus: false
            }
        case CourseActions.EDITING_ID:
            return {
                ...state,
                courseId: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}