import { Component } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'communities-extended',
  templateUrl: './communities-extended.component.html',
  styleUrls: ['./communities-extended.component.scss']
})
export class CommunitiesExtendedComponent {
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
