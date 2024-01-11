import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagingService } from '../../messaging.service';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'messages-box',
  templateUrl: './messages-box.component.html',
  styleUrls: ['./messages-box.component.scss'],
})
export class MessagesBoxComponent implements OnInit {
  public message = {
    sender: {
      _id: '5f9d5f5b9b3f9c0017e7e7a5',
    },
  };

  @ViewChild('messagesDiv') messagesDiv;

  constructor(public messaging: MessagingService) {}

  public messages$ = new BehaviorSubject<any[]>([]);

  ngOnInit() {
    this.messaging.currentRoom$
      .pipe(
        switchMap((room) => {
          if (room) {
            return this.messaging.getMessages(room._id);
          }
          return [];
        })
      )
      .subscribe((messages) => {
        this.messages$.next(messages);
        this.scrollBottom();
      });

    this.messaging.onNewMessage().subscribe((message: any) => {
      console.log('new', message);
      if (message.room == this.messaging.currentRoom$.value._id) {
        console.log('new2', message);
        this.messages$.next([...this.messages$.value, message]);
        this.scrollBottom();
      }
    });
  }

  public scrollBottom() {
    setTimeout(() => {
      this.messagesDiv.nativeElement.scrollTo(
        0,
        this.messagesDiv.nativeElement.scrollHeight + 100
      );
    }, 100);
  }
}
