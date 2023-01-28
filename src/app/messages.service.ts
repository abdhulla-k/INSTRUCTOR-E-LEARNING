import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  errorMessage = '';
  successMessage = '';
  errorMessageEmitter = new EventEmitter<string>()
  successMessageEmitter = new EventEmitter<string>()
  constructor() { }
}
