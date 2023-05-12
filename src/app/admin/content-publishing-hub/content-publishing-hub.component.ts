import { Component, OnInit, ViewChild } from '@angular/core';
import MenuItem from '../models/menu-item';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'content-publishing-hub',
  templateUrl: './content-publishing-hub.component.html',
  styleUrls: ['./content-publishing-hub.component.scss']
})
export class ContentPublishingHubComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup : MatTabGroup;

  activeButton = 0;
  liste = true;
  hafta = false;
  ay = false;

listeClick() {
  this.activeButton = 0;
  this.liste = true;
  this.hafta = false;
  this.ay = false;
}

haftaClick() {
  this.activeButton = 1;
  this.liste = false;
  this.hafta = true;
  this.ay = false;
}

ayClick() {
  this.activeButton = 2;
  this.liste = false;
  this.hafta = false;
  this.ay = true;
}

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
  constructor() { }

  ngOnInit(): void {
  }

}
