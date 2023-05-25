import { Component, OnInit } from '@angular/core';
import MenuItem from '../models/menu-item';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  public menuItems: MenuItem[][] = [
    [
      {
        label: 'Anasayfa',
        icon: 'home',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false
      },
      {
        label: 'İstatistikler',
        icon: 'query_stats',
        route: '/admin/statistics',
        roles: ['admin'],
        expands: true
      },
      {
        label: 'Profil',
        icon: 'grid_on',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true
      },
    ],
    [
      {
        label: 'Kişiler',
        icon: 'people_outline',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true
      },
      {
        label: 'Projeler',
        icon: 'rocket_launch',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true
      },
      {
        label: 'Etkinlikler',
        icon: 'event',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true
      },
      {
        label: 'İlanlar',
        icon: 'newspaper',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: true
      },
    ],
    [
      {
        label: 'Partnerlik Platformu',
        icon: 'verified',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false
      },
      {
        label: 'İş Birliği Platformu',
        icon: 'group_work',
        route: '/admin/dashboard',
        roles: ['admin'],
        expands: false
      },
    ],
    [
    {
      label: 'Mesajlaşma',
      icon: 'chat',
      route: '/admin/dashboard',
      roles: ['admin'],
      expands: false
    },
    {
      label: 'Bildirim',
      icon: 'notifications',
      route: '/admin/dashboard',
      roles: ['admin'],
      expands: true
    },
    ]
  ];

  constructor() {}

  ngOnInit(): void {}
}
