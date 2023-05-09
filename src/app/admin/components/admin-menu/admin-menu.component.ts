import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import MenuItem from '../../models/menu-item';

@Component({
  selector: 'admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(public breakPointObserver:BreakpointObserver) { }

  @Input() public menuItems: MenuItem[] = [];

  ngOnInit(): void {
  }

  public isMobile = this.breakPointObserver
  .observe("(max-width: 800px)")
  .pipe(map((result) => result.matches));

}
