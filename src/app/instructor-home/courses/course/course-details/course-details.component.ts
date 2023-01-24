import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from 'src/app/instructor-home/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id = ''
  course: any;
  selectedModule: any;
  moduleFormData = new FormData();
  videoPath: string = 'https://mdbcdn.b-cdn.net/img/video/forest.mp4'
  moduleForm!: FormGroup;
  addModule = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
      this.courseService.getCourseDetails(this.id).subscribe(data => {
        this.course = data;
        this.selectedModule = this.course.modules[0];
        // set the default title to form
        this.moduleForm.patchValue({
          videoTitle: this.selectedModule.videoTitle
        })
      })
    })

    this.moduleForm = new FormGroup({
      'videoTitle': new FormControl('', Validators.required),
      'note': new FormControl('', Validators.required),
      'video': new FormControl('', Validators.required),
      'question': new FormControl('', Validators.required),
    })

    this.courseService.deletedModuleIndex.subscribe((index: number) => {
      this.course.modules.splice(index, 1);
    })
  }

  changeModule(event: any) {
    this.selectedModule = event;
    this.moduleForm.patchValue({
      videoTitle: event.videoTitle
    })
  }

  switchToAddModule() {
    this.addModule = !this.addModule;
  }

  addNewModule() {
    if (this.moduleForm.valid) {
      this.moduleFormData.delete('title');
      this.moduleFormData.append('title', this.moduleForm.value.videoTitle);
      
      if (this.addModule) {
        this.courseService.saveModule(this.moduleFormData, this.id).subscribe(data => {
          this.course.modules.push(data.courseData.modules[this.course.modules.length])
        })
      } else {
        this.courseService.updateModule(
          this.id,
          this.selectedModule._id,
          this.moduleFormData
        )
      }
    }
  }

  saveFile(key: string, event: any) {
    this.moduleFormData.append(key, event.target.files[0]);
    console.log(key)
    // console.log(event.target.files[0])
  }

  deleteModule(event: { moduleId: string, index: number }) {
    this.courseService.deleteModule(event.moduleId, this.id, event.index);
  }
}
