import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ControllerService } from 'src/app/controller.service';
import { AuthService } from '../auth.service';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ableButton = false;
  passwordConfirmed = false;
  loginPasswordStrength!: Subscription;

  constructor( 
    private controllerService: ControllerService,
    private authService: AuthService,
    private store: Store
  ) { }


  ngOnInit(): void {
    this.loginPasswordStrength = this.controllerService.loginPasswordStrength.subscribe( data => {
      console.log(data);
      if(data === 4) {
        this.ableButton = true;
      } else {
        this.ableButton = false;
      }
    })
  }

  onSubmit(formData: NgForm) {
    // make sure the password and confirm password are same
    this.passwordConfirmed = formData.value.confirmPassword == formData.value.password? true : false;
    
    // send the data to server
    // if(this.passwordConfirmed && this.ableButton) {
    //   this.store.dispatch(new AuthActions.SignupStart(formData.value));
    // }
    this.authService.signUp(formData.value);
  }

}
