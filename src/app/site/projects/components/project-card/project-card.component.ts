import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project : any
  @Input('dark') dark : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
