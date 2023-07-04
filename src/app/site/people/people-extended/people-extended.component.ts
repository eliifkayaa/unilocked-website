import { Component } from '@angular/core';

@Component({
  selector: 'people-extended',
  templateUrl: './people-extended.component.html',
  styleUrls: ['./people-extended.component.scss']
})
export class PeopleExtendedComponent {
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
