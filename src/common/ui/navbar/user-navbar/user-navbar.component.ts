import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {

  @Input('drawer') public drawer

  constructor() { }

  ngOnInit(): void {
  }

}
