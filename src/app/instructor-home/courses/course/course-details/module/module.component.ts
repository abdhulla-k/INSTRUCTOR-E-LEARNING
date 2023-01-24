import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  @Input() module: any;
  @Output() moduleTransfer = new EventEmitter()

  transferData() {
    this.moduleTransfer.emit(this.module);
  }
}
