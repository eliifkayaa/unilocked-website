import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@common/services/search.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,public serach:SearchService) { }

  ngOnInit(): void {
  }

  public query = this.activatedRoute.queryParams.pipe(map(params => params['query']))
  public searchResults$ =  this.activatedRoute.queryParams.pipe(switchMap(params => this.serach.global(params['query']))).pipe(map(res => res.data))

  public community = {
    name:"AlecTED",
    backdrop:"assets/img/alekted.png",
    avatar:"assets/img/alekted-avatar.jpeg",
    shortDesc:"TED University Alternative Energy Car Team"
  }

  public communities = [
    this.community,
    this.community,
    this.community,
    this.community
    ]

  isResponsive: boolean = true;

  @Input('project') project : any
  @Input('dark') dark : boolean = false

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
