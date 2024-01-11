import { Component } from '@angular/core';
import { MessagingService } from '../../messaging.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss'],
})
export class WriteMessageComponent {
  constructor(public messaging: MessagingService, private fb:FormBuilder) {}

  public form = this.fb.group({
    message: [''],
  });

  public submit() {
    this.messaging.sendMessage(
      this.messaging.currentRoom$.value._id,
      this.messaging.currentRoom$.value.receiver,
      this.form.value.message
    );
    this.form.reset();
  }
}
