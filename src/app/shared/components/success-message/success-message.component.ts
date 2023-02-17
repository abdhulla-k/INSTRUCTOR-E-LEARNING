import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})

export class SuccessMessageComponent {
  successMessage = '';
  successMessageSubscription!: Subscription;

  constructor(private MessageService: MessagesService) { }
  ngOnInit(): void {
    this.successMessageSubscription = this.MessageService.successMessageEmitter.subscribe(data => {
      this.successMessage = data;
    })
  }
}