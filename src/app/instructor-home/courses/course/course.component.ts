import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  imgUrl = 'https://picsum.photos/1000/1000';
  description = 'This is a short discription about this cource. This is an angular corse that covers all the area includes Data bynding, NgRx, Rxjs etc....'
}
