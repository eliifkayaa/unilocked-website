import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPeopleComponent implements OnInit {

  @Input('items') items : any[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

  longText = ` Türkiye • İnsan Kaynakları Yöneticisi`;


}
