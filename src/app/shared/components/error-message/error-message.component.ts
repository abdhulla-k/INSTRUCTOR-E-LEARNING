import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  errorMessage = '';
  errorSubscription!: Subscription;
  constructor( private messageService: MessagesService) { }

  ngOnInit(): void {
    this.errorSubscription = this.messageService.errorMessageEmitter.subscribe(data => {
      this.errorMessage = data;
    })
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
