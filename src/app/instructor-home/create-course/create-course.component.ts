import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  courceForm!: FormGroup;
  selectedFile!: any;

  constructor(
    private http: HttpClient,
    private courseService: CoursesService,
    private store: Store
  ) { }

  ngOnInit() {
    //  create form 
    this.courceForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'main-image': new FormControl(null, Validators.required),
      'description': new FormControl('', Validators.required),
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
    this.courseService.createCourse(formData);
  }
}
