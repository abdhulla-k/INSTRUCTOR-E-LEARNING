import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private CourseService: CoursesService) { }
  ngOnInit(): void {
    this.CourseService.fetchCourses(0).subscribe((courses: Course[] | any) => {
      console.log(courses);
      this.courses = courses;
    })
  }
}
