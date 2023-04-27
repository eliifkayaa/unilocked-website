import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input('icon') icon:string
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