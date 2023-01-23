import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEye, faPen, faArchive } from '@fortawesome/free-solid-svg-icons'

import { Course } from 'src/app/shared/models/course';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course!: Course | any;
  @Input() index!: number;
  eye = faEye;
  delete = faArchive;
  edit = faPen

  constructor(
    private courseService: CoursesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.course._id, this.index);
  }
}
