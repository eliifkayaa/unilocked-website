import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
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
