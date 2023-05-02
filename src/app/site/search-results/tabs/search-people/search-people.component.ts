import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longText = ` Türkiye • İnsan Kaynakları Yöneticisi`;


}
