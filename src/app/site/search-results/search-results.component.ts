import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  isResponsive: boolean = true;

  @Input('project') project : any
  @Input('dark') dark : boolean = false

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  longText = ` Türkiye • İnsan Kaynakları Yöneticisi`;

}
