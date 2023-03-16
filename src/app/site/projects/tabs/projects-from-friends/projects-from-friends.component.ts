import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-from-friends',
  templateUrl: './projects-from-friends.component.html',
  styleUrls: ['./projects-from-friends.component.scss']
})
export class ProjectsFromFriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
