import { Component, Input } from '@angular/core';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent {


  @Input() public contact: any;

  get name() {
    return this.contact.type;
  }

  get type() {
    /*
     DIRECT_MESSAGE = "DIRECT_MESSAGE",
  GROUP = "GROUP",
  CHANNEL = "CHANNEL",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  */
    switch (this.contact.roomType) {
      case 'DIRECT_MESSAGE':
        return 'Özel Mesaj';
      case 'GROUP':
        return 'Grup Mesajı';
      case 'CHANNEL':
        return 'Kanal';
      case 'ORGANIZATION':
        return 'Organizasyon Grubu';
      case 'OTHER':
        return 'Diğer';
      default:
        return 'Diğer';
    }
  }

  get count() {
    return this.contact.members.length;
  }

  constructor(public messaging:MessagingService) {}
}
