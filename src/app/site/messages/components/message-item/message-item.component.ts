import { Component, Input } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent {

  @Input() message: any;

  constructor(private auth: AuthService) {}

  public userId = this.auth.user?._id;
}
