import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as appState from '../store/app.reducer';
import { courseCreateResponse } from '../shared/models/course-create-response';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [];
  courseUpdate = new EventEmitter();

  constructor(private http: HttpClient, private store: Store<appState.AppState>, private router: Router) { }

  createCourse(formData: FormData): Observable<courseCreateResponse> {
    return this.http.post<courseCreateResponse>('http://localhost:3000/instructor/createCourse', formData);
  }

  saveModule(formData: FormData, id: string) {
    console.log(id);
    return this.http.post<courseCreateResponse>(`http://localhost:3000/instructor/${id}/module`, formData);
  }

  fetchCourses(section: number) {
    this.http.get<Observable<Course[]>>(`http://localhost:3000/instructor/getCourses/${section}`)
      .subscribe((courses: Course[] | any) => {
        this.courses = courses;
        this.courseUpdate.emit(courses);
      })
  }

  getCourseDetails(id: string) {
    return this.http.get(`http://localhost:3000/instructor/details/${id}`);
  }

  deleteCourse(id: string, index: number) {
    this.http.delete(`http://localhost:3000/instructor/delete/${id}`).subscribe(response => {
      this.courses.splice(index, 1);
      this.courseUpdate.emit(this.courses);
    })
  }
}
