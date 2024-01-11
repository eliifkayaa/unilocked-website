import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-other',
  templateUrl: './message-other.component.html',
  styleUrls: ['./message-other.component.scss']
})
export class MessageOtherComponent {

  @Input() message: any;

}
