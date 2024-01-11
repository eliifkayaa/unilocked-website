import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {

  @Input('items') items : any[]

  constructor() { }

  ngOnInit(): void {
  }

}
