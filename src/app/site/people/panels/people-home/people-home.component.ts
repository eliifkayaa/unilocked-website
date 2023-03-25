import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.scss','../panel.scss']
})
export class PeopleHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
