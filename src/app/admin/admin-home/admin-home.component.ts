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
  

  activeBtn = 'btn1';
  public setActive = (btnName) => {
    this.activeBtn = btnName;
  };

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.ctx = this.canvas1.nativeElement.getContext('2d');
      this.ctx2 = this.canvas2.nativeElement.getContext('2d');

      const labels = ['13 Nisan', '14 Nisan', '15 Nisan', '16 Nisan', '17 Nisan', '18 Nisan', '19 Nisan', '20 Nisan'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Takipçi',
            data: [70, 90, 40, 45, 105, 55, 25, 35],
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
      const config = {
        type: 'bar',
        data: data,
      };
      this.chart = new Chart(this.ctx, config as any);

      const data2 = {
        datasets: [
          {
            data: [85.97, 7.92, 6.09]
          }
        ]
      };

      const config2 = {
        type: 'pie',
        data: data2,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          }
        },
      };

      this.chart2 = new Chart(this.ctx2, config2 as any);

    }, 1000);
  }

  ctx: any;
  ctx2 : any;
  public chart: any;
  public chart2: any;

  @ViewChild('canvas1') canvas1: any;
  @ViewChild('canvas2') canvas2: any;

  ngAfterViewInit() {}
}
