import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(public auth:AuthService) { }

  public community = {
    name:"AlecTED",
    backdrop:"assets/img/alekted.png",
    avatar:"assets/img/alekted-avatar.jpeg",
    shortDesc:"TED University Alternative Energy Car Team"
  }

  public communities = [
    this.community,
    this.community,
    this.community,
    this.community
    ]

  ngOnInit(): void {
  }

}
