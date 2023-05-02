import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input('title') public title : string = '';
  @Input('color') public color : string = 'blue'

  constructor() { }

  ngOnInit(): void {
  }

}
