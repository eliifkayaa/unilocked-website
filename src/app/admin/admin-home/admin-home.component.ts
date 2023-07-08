import { Component, OnInit, ViewChild } from '@angular/core';
import MenuItem from '../models/menu-item';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Chart } from 'chart.js';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  animations: [
    trigger('buttonState', [
      state('active', style({
        backgroundColor: 'FBFBFC',
        color: '#495057'
      })),
      state('inactive', style({
        background: "none",
        color: '#F1F3F5'
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
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

  activeBtn = "btn1"
  public setActive = (btnName) => {
    this.activeBtn = btnName
  }

  constructor() {}
  ngOnInit() : void{}

  canvas : any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Current Vallue',
                data: [0, 20, 40, 50],
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: true,
            },
            {
                label: 'Invested Amount',
                data: [0, 20, 40, 60, 80],
                backgroundColor: "#47a0e8",
                borderColor: "#007ee7",
                fill: true,
            }],
            labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
        },
    });
  }


  

}
