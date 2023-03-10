import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-from-communities',
  templateUrl: './projects-from-communities.component.html',
  styleUrls: ['./projects-from-communities.component.scss']
})
export class ProjectsFromCommunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
