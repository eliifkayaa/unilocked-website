import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input('icon') icon:string
  @Input('color') color:string

  @Input('title') title:string
  @Input('text') text:string
  @Input('buttonText') buttonText:string
  @Output('buttonClick') buttonClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  click( ){
    this.buttonClick.emit()
  }

}
