import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  @Input() videoUrl = 'https://mdbcdn.b-cdn.net/img/video/forest.mp4'
}
