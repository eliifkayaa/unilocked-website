import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, map } from 'rxjs';
import MenuItem from '../../models/menu-item';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminMenuComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public theme: AppThemeService,
    public formBuilder: FormBuilder,
    public router: Router,
    private breakPointObserver: BreakpointObserver
    ) { }

  @Input() public menuItems: MenuItem[][] = [];

  ngOnInit(): void {
  }

  public logo = new Observable<string>((observer) => {
    this.isMobile.subscribe((isMobile) => {
      if (isMobile) {
        observer.next('assets/img/logo-mobile.png');
      } else {
        observer.next(
          this.theme.darkMode
            ? 'assets/img/logo-white.png'
            : 'assets/img/logo.png'
        );
      }
    });
  });

  public isMobile = this.breakPointObserver
  .observe("(max-width: 800px)")
  .pipe(map((result) => result.matches));

}
