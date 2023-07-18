import { Component, OnInit, ViewChild } from '@angular/core';
import MenuItem from '../models/menu-item';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'content-publishing-hub',
  templateUrl: './content-publishing-hub.component.html',
  styleUrls: ['./content-publishing-hub.component.scss'],
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
export class ContentPublishingHubComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
  }

}
