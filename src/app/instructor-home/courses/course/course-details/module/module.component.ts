import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { CoursesService } from 'src/app/instructor-home/courses.service';

@Component({
  selector: 'app-course-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  @Input() module: any;
  @Input() index: number = 0;
  @Output() moduleTransfer = new EventEmitter()
  deleteIcon = faRemove;
  @Output() idPassToDelete = new EventEmitter<{ moduleId: string, index: number }>()

  constructor(private courseService: CoursesService) { }

  transferData() {
    this.moduleTransfer.emit(this.module);
  }

  deleteModule() {
    this.idPassToDelete.emit({ moduleId: this.module._id, index: this.index });
  }
}
