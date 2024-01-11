import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-user',
  templateUrl: './message-user.component.html',
  styleUrls: ['./message-user.component.scss']
})
export class MessageUserComponent {
  @Input() message: any;
}
