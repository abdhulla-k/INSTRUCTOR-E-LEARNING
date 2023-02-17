import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = false;

  constructor( private store: Store) {}
  login(formData: NgForm) {
    if(formData.valid) {
      this.errorMessage = false;
      this.store.dispatch(new AuthActions.LoginStart(formData.value));
    } else {
      this.errorMessage = true;
    }
  }
}
