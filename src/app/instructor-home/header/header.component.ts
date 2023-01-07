import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ControllerService } from 'src/app/controller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  faHumbergerMenue = faBars;

  constructor(
    private controllerService: ControllerService
  ) { }


  ngOnInit(): void {

  }

  // function to control side bar with humberger icon
  toggleSidebar() {
    this.controllerService.sideNavToggler.emit();
  }
}
