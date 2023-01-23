import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CoursesService } from '../courses.service';
import { courseCreateResponse } from '../../shared/models/course-create-response';
import * as fromAppStore from '../../store/app.reducer';
import * as CourseActions from '../../instructor-home/store/course.actions';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  courceForm!: FormGroup;
  moduleForm! : FormGroup;
  selectedFile!: File;
  moduleFormData = new FormData();
  createStatus = false;
  courseData!: courseCreateResponse
  courseId = '';

  constructor(
    private courseService: CoursesService,
    private store: Store<fromAppStore.AppState>
  ) { }

  ngOnInit() {
    //  create form 
    this.courceForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'main-image': new FormControl(null, Validators.required),
      'description': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'teacher': new FormControl('', Validators.required),
    })

    this.moduleForm = new FormGroup({
      'videoTitle': new FormControl('', Validators.required),
      'note': new FormControl('', Validators.required),
      'video': new FormControl('', Validators.required),
      'question': new FormControl('', Validators.required),
    })

    this.store.select('courseActivities').subscribe(data => {
      this.courseId = data.courseId
      console.log(this.courseId);
    })
  }

  // listen to the file selection and get the image
  processFile(event: any) {
    // save the image in a special folder
    this.selectedFile = event.target.files[0];
  }

  // function to create course
  // and send the the request
  onSubmit() {
    // create a form data
    const formData = new FormData();

    // uppend all data to the form
    formData.append('image', this.selectedFile);
    formData.append('title', this.courceForm.value.title);
    formData.append('description', this.courceForm.value.description);
    formData.append('price', this.courceForm.value.price);
    formData.append('teacher', this.courceForm.value.teacher);

    this.courseService.createCourse(formData).subscribe((response: courseCreateResponse) => {
      if(response.status) {
        this.createStatus = true;
        this.courseData = response;
        this.courseId = response.id
        this.store.dispatch(new CourseActions.EditId(response.id));
      }
    })
  }

  saveFile(key: string, event: any) {
    this.moduleFormData.append(key, event.target.files[0]);
    console.log(event.target.files[0])
  }

  addModule() {
    console.log(this.courseId)
    this.moduleFormData.append('title', this.moduleForm.value.videoTitle);
    this.courseService.saveModule(this.moduleFormData, this.courseId).subscribe(data => {
      console.log(data);
      // this.course = data;
    })
  }
}
