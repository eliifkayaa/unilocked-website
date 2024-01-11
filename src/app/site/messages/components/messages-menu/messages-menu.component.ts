import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../messaging.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'messages-menu',
  templateUrl: './messages-menu.component.html',
  styleUrls: ['./messages-menu.component.scss'],
})
export class MessagesMenuComponent implements OnInit {
  constructor(public messaging: MessagingService) {}

  public rooms$ = new BehaviorSubject<any[]>([]);

  ngOnInit(): void {
    this.messaging.rooms$.subscribe((rooms) => {
      this.rooms$.next(rooms);
    });

    this.messaging.onNewRoom().subscribe((room) => {
      this.rooms$.next([...this.rooms$.value, room]);
    });
  }
}
