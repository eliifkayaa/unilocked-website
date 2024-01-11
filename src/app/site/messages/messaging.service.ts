import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@common/auth/auth.service';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewChatComponent } from './components/new-chat/new-chat.component';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  public currentRoom$ = new BehaviorSubject<any>(null);
  public joinedRoom = null;

  constructor(
    private socket: Socket,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
    this.currentRoom$.subscribe((room) => {
      if (room && this.joinedRoom != room._id) {
        this.socket.emit('joinRoom', room._id);
        this.joinedRoom = room._id;
      }
    });
  }

  public rooms$ = this.emitWithAck<any[]>('getRooms', {
    memberType: this.auth.currentProfile.modelType,
    memberId: this.auth.currentProfile._id,
  });

  public onNewMessage() {
    return new Observable<any>((observer) => {
      this.socket.on('newMessage', (message: any) => {
        observer.next(message);
      });
    });
  }

  public onNewRoom() {
    return new Observable<any>((observer) => {
      this.socket.on('newRoom', (room: any) => {
        observer.next(room);
      });
    });
  }

  public getMessages(roomId: string) {
    return this.emitWithAck<any[]>('getMessages', { roomId });
  }

  public sendMessage(
    roomId: string = null,
    receiverId: string = null,
    message: any
  ) {
    const senderId = this.auth.user._id;
    const senderType = 'User';
    this.emitWithAck('sendMessage', {
      roomId,
      receiverId,
      text: message,
      senderId,
      senderType,
    }).subscribe((response: any) => {
      if (!roomId) {
        console.log('new room', response);
        this.currentRoom$.next(response.room);
      }
    });
  }

  public emitWithAck<T>(eventName: string, data: any = undefined) {
    return new Observable<T>((observer) => {
      this.socket.emit(eventName, data, (response: any) => {
        console.log('emitWithAck Response', response);
        observer.next(response.data);
        observer.complete();
      });
    });
  }

  public openNewChatDialog() {
    const ref = this.dialog.open(NewChatComponent);
    ref.afterClosed().subscribe((room: any) => {
      this.currentRoom$.next({
        _id: null,
        name: room.name,
        image: room.avatar,
        receiver: room._id,
      });
    });
  }
}
