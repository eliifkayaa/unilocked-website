import { Component } from '@angular/core';

@Component({
  selector: 'projects-extended',
  templateUrl: './projects-extended.component.html',
  styleUrls: ['./projects-extended.component.scss']
})
export class ProjectsExtendedComponent {
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
