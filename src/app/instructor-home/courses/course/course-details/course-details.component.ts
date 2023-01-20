import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/instructor-home/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id = ''
  course: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
      this.courseService.getCourseDetails(this.id).subscribe(data => {
        this.course = data
        console.log(this.course)
      })
    })
  }
}
