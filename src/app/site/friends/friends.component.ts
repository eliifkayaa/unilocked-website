import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(public auth:AuthService) { }

  public person1 = {
    name:"Elif Kemertaş",
    backdrop:"assets/img/person1-back.png",
    avatar:"assets/img/person1.png",
    shortDesc:"PlayStation Türkiye’de UI Designer"
  }

  public people = [
    this.person1,
    this.person1,
    this.person1,
    this.person1
    ]

  ngOnInit(): void {
  }

}
