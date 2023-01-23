import { Component, Input, OnInit } from '@angular/core';
import { faEye, faPen, faArchive } from '@fortawesome/free-solid-svg-icons'

import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course!: Course | any;
  eye = faEye;
  delete = faArchive;
  edit = faPen

  ngOnInit() {
  }
}
