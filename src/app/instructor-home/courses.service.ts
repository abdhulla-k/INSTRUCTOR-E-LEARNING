import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as appState from '../store/app.reducer';
import { courseCreateResponse } from '../shared/models/course-create-response';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private store: Store<appState.AppState>, private router: Router) { }

  createCourse(formData: FormData):Observable<courseCreateResponse> {
    return this.http.post<courseCreateResponse>('http://localhost:3000/instructor/createCourse', formData)
  }

  saveModule(formData: FormData, id: string) {
    this.http.post<courseCreateResponse>(`http://localhost:3000/instructor/${id}/module`, formData).subscribe(data => {
      console.log(data);
    })
  }
}
