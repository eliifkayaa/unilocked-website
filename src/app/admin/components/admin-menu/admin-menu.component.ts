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

  @Input() public menuItems: MenuItem[][] = [
    [
      {
        label: 'Anasayfa',
        icon: 'home',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false,
      },
      {
        label: 'İstatistikler',
        icon: 'query_stats',
        route: '/admin/statistics',
        roles: ['admin'],
        expands: true,
      },
      {
        label: 'Profil',
        icon: 'grid_on',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
    ],
    [
      {
        label: 'Kişiler',
        icon: 'people_outline',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
      {
        label: 'Projeler',
        icon: 'rocket_launch',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
      {
        label: 'Etkinlikler',
        icon: 'event',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
      {
        label: 'İlanlar',
        icon: 'newspaper',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
    ],
    [
      {
        label: 'Partnerlik Platformu',
        icon: 'verified',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false,
      },
      {
        label: 'İş Birliği Platformu',
        icon: 'group_work',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false,
      },
    ],
    [
      {
        label: 'Mesajlaşma',
        icon: 'chat',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false,
      },
      {
        label: 'Bildirim',
        icon: 'notifications',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true,
      },
    ],
  ];

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
