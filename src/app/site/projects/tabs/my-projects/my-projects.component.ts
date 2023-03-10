import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public projects = [
    {
      image: 'assets/img/placeholder.png',
      name: 'Alekted Otonom Araç Projesi',
      workers: [
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
      ],
    },
    {
      image: 'assets/img/placeholder.png',
      name: 'Alekted Otonom Araç Projesi',
      workers: [
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
        {
          image: 'assets/img/placeholder.png',
          name: 'Elif Kemertaş',
        },
      ],
    },
  ];
}
