import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ControllerService } from 'src/app/controller.service';

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
    private controllerService: ControllerService
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
  }

}
