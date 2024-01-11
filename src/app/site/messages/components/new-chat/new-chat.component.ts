import { Component } from '@angular/core';
import { FollowersService } from '@common/services/followers.service';
import { map } from 'rxjs';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss'],
})
export class NewChatComponent {
  constructor(public followers: FollowersService,public messaging:MessagingService) {}

  currentPage = 1;
  public avaibleContacts$ = this.followers.getAvaibleChatUsers().pipe(
    map((users) => {
      this.currentPage = 1;
      console.log(users);
      return users.data;
    })
  );

  public openRoom(contact:any) {
    this.messaging.currentRoom$.next({
      _id:undefined,
      name: contact.name,
    })
  }
}
