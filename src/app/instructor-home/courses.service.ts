import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CourseActions from './store/course.actions';
import * as appState from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private store: Store<appState.AppState> ) { }

  createCourse(formData: FormData) {
    // console.log(formData);
    this.http.post('http://localhost:3000/instructor/createCourse', formData).subscribe(data => {
      console.log(data)
    })
  }
}
