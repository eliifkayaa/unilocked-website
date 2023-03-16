import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss'],
})
export class ProjectsHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public projects = [
    {
      image: 'assets/img/placeholder.png',
      name: 'AlecTED Otonom Araç Projesi',
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
      name: 'AlecTED Otonom Araç Projesi',
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
