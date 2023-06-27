import { Component, OnInit } from '@angular/core';
import MenuItem from '../models/menu-item';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss'],
  animations: [
    // Animasyonlu görünüm için bir trigger oluşturalım.
    trigger('fadeInOut', [
      // Görünüm geçişleri
      transition(':enter', [
        // Başlangıç stilimiz
        style({ opacity: 0 }),
        // Bitiş stilimiz
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        // Başlangıç stilimiz
        style({ opacity: 1 }),
        // Bitiş stilimiz
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProfileEditingComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  accordion = [];
  activeButton = 0;
  bolum = true;
  duzenleme = false;
  onizle = false;

  bolumClick() {
    this.activeButton = 0;
    this.bolum = true;
    this.duzenleme = false;
    this.onizle = false;
  }

  duzenlemeClick() {
    this.activeButton = 1;
    this.bolum = false;
    this.duzenleme = true;
    this.onizle = false;
  }

  onizleClick() {
    this.activeButton = 2;
    this.bolum = false;
    this.duzenleme = false;
    this.onizle = true;
  }

  accordionClick(id) {
    const accordionElement = document.getElementById(`accordion${id}`)
    const mainHeight = document.getElementById(`main${id}`).scrollHeight
    console.log(mainHeight)

    if(this.accordion.includes(id)) {
      this.accordion = this.accordion.filter(item => item !== id)
      accordionElement.style.height = "11vh"
    }
    else {
      this.accordion.push(id)
      accordionElement.style.height = `calc(11vh + ${mainHeight}px + 50px)`;
    }
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

  public contents = [
    {
      title : "Bölüm Düzeni",
      button : true,
      lists : [
        {
          title : "Hakkında",
          subtitle : "yes"
        },
        {
          title : "Gönderiler",
          subtitle : "yes"
        },
        {
          title : "İletişim",
          subtitle : "no"
        },
        {
          title : "Öne Çıkarılan İçerikler",
          subtitle : "yes"
        },
        {
          title : "Kurumda Yaşam",
          subtitle : "yes"
        },
        {
          title : "Güncel Staj İlanları",
          subtitle : "yes"
        },
        {
          title : "Mezunlar",
          subtitle : "yes"
        },
      ] 
    },
    {
      title: "Önerilen Bölümler",
      button: false,
      lists : [
        {
          title : "Okul Toplulukları",
          subtitle : "Kurumunuzun altında bulunan toplulukları gösterin."
        },
        {
          title : "Okuldan Projeler",
          subtitle : "Okul Toplulukları veya anlaşmalı kurumların projelerini gösterin. • Proje yönetimini İş Birliği Platformu üzerinden düzenleyebilirsiniz."
        },
        {
          title : "Etkinlikler",
          subtitle : "Düzenlediğiniz veya kurumunuz altında düzenlenen etkinlikleri listeleyin. • Etkinlik yönetimini İş Birliği Platformu üzerinden düzenleyebilirsiniz."
        },
        {
          title : "Teknopark",
          subtitle : "Kurumunuz altında bulunan veya anlaşmalı olduğunuz Teknoparkın profiline yönlendirin."
        }
      ] 
    }
    

  ]
    
  ngOnInit(): void {
  }

}
