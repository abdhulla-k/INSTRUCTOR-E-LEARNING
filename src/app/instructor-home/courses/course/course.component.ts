import { Component, Input, OnInit } from '@angular/core';

import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course!: Course | any;

  ngOnInit() {
  }
}
