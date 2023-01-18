import { Action } from "@ngrx/store";

export const COURSE_CREATION_START = '[Course] Course creation started';
export const COURSE_CREATION_END = '[Course] Course creation end'

export class CourseCreationStart implements Action {
    readonly type = COURSE_CREATION_START;
    constructor( public payload: {
        file: File,
        title: string,
        description: string
    }) {}
}

export class CourseCreationEnd implements Action {
    readonly type = COURSE_CREATION_END;
}

export type CourseActions = 
    CourseCreationStart |
    CourseCreationEnd;
