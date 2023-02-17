import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  sideNavToggler = new EventEmitter();
  loginPasswordStrength = new EventEmitter();
}
