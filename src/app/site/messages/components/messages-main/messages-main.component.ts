import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'messages-main',
  templateUrl: './messages-main.component.html',
  styleUrls: ['./messages-main.component.scss'],
})
export class MessagesMainComponent {
  constructor(private breakPointObserver: BreakpointObserver) {}

  public isMobile = this.breakPointObserver
    .observe('(max-width: 900px)')
    .pipe(map((result) => result.matches));
}
