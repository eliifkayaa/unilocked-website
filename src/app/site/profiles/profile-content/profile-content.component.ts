import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent implements OnInit {

  constructor() { }

  @Input('item') item : any

  ngOnInit(): void {
  }

}
