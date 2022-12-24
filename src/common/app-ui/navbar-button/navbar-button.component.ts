import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent implements OnInit {

  @Input() public route : string[] = []
  @Input() public name : string = ''
  @Input() public icon : string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
