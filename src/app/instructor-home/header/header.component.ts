import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ControllerService } from 'src/app/controller.service';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  faHumbergerMenue = faBars;

  constructor(
    private controllerService: ControllerService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('authentication').subscribe(data => {
      this.loggedIn = data.loggedIn;
    })

    if(JSON.parse(localStorage.getItem('instructorData') || '{}').jwtToken) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  // function to control side bar with humberger icon
  toggleSidebar() {
    this.controllerService.sideNavToggler.emit();
  }
}
