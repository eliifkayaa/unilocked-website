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
    name:"Alekted",
    backdrop:"assets/img/placeholder.png",
    avatar:"http://www.gravatar.com/avatar/be89e06e167a9243cf69e018202c022d",
    shortDesc:"TED University Alternative Energy Car Team"
  }

  public communities = [
    this.community,
    this.community,
    this.community
  ]

  ngOnInit(): void {
  }

}
