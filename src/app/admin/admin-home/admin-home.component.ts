import { Component, OnInit, ViewChild } from '@angular/core';
import MenuItem from '../models/menu-item';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import Chart from 'chart.js/auto';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  animations: [
    trigger('buttonState', [
      state(
        'active',
        style({
          backgroundColor: 'FBFBFC',
          color: '#495057',
        })
      ),
      state(
        'inactive',
        style({
          background: 'none',
          color: '#F1F3F5',
        })
      ),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class AdminHomeComponent implements OnInit {
  public menuItems: MenuItem[][] = [
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

  activeBtn = 'btn1';
  public setActive = (btnName) => {
    this.activeBtn = btnName;
  };

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.ctx = this.canvas1.nativeElement.getContext('2d');

      const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      };
      // </block:setup>

      // <block:config:0>
      const config = {
        type: 'bar',
        data: data,
      };

      this.chart = new Chart(this.ctx, config as any);
    }, 1000);
  }

  ctx: any;
  public chart: any;

  @ViewChild('canvas1') canvas1: any;

  ngAfterViewInit() {}
}
