import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";

import { environment } from "src/environments/environment";

@Injectable()
export class CourseEffects {
    // $createCourse = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CoursesAction.COURSE_CREATION_START),
    //         switchMap((courseData: {
    //             file: File,
    //             title: string,
    //             description: string
    //         }) => {
    //             const formData = new FormData();
    //             formData.append('image', courseData.file);
    //             formData.append('title', courseData.title);
    //             formData.append('description', courseData.description);
    //             return this.http.post<any>(
    //                 `${this.baseRoute}/createCourse`, formData)
    //         })
    //     )
    // )

    baseRoute!: String;
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
    ) {
        this.baseRoute = environment.baseUrl;
    }
}