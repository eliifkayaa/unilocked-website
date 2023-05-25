import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private breakPointObserver:BreakpointObserver) { }

  ngOnInit(): void {
  }

  public isMobile = this.breakPointObserver
    .observe("(max-width: 800px)")
    .pipe(map((result) => result.matches));
}
