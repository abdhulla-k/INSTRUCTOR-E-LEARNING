import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  courceForm!: FormGroup;
  selectedFile!: File;

  constructor(private http: HttpClient, private courseService: CoursesService) { }

  ngOnInit() {
    this.courceForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'main-image': new FormControl(null, Validators.required),
      'course-description': new FormControl('', Validators.required),
    })
  }

  processFile(imageInput: any) {
    this.selectedFile = imageInput.files[0];
    const reader = new FileReader();
  }

  onSubmit() {
    this.http.post('http://localhost:3000/instructor/createCourse', {image: this.selectedFile})
    .subscribe(data => {
      console.log(data);
    });
    // if (this.courceForm.valid) {
    //   // this.courseService.createCourse(this.courceForm.value)
    // }
  }
}
