import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  createCourse(courceForm: any) {
    this.http.post<any>('http://localhost:3000/instructor/createCourse', courceForm).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err)
    })
  }
}
