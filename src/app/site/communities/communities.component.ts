import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {

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
