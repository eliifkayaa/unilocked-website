import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-projects',
  templateUrl: './search-projects.component.html',
  styleUrls: ['./search-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchProjectsComponent implements OnInit {

  @Input('items') items : any[]

  constructor() { }

  ngOnInit(): void {
  }

}
