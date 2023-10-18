import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'discovery-topnotes',
  templateUrl: './discovery-topnotes.component.html',
  styleUrls: ['./discovery-topnotes.component.scss']
})
export class DiscoveryTopnotesComponent {
  keys: Keys[] = [
    {name: 'UI Designer', color: '#343A40', icon: 'search', textColor: '#F1F3F5'},
    {name: 'Eğlence Sektörü • İlgi Alanınız', color: '#343A40', textColor: '#F1F3F5'},
    {name: 'İletişim Sektörü • İlgi Alanınız', color: '#343A40', textColor: '#F1F3F5'},
    {name: 'Yükselişte Olanlar', color: '#E9ECEF', icon: 'stars', textColor: '#495057'},
    {name: 'Staj İlanı Yayınlayan Şirketler', color: '#E9ECEF', textColor: '#495057'},
    {name: '10.000+ Takipçi', color: '#E9ECEF', textColor: '#495057'},
    {name: '25.000+ Takipçi', color: '#E9ECEF', textColor: '#495057'},
  ];
  drop(event: CdkDragDrop<Keys[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
  }
  
}
export interface Keys {
  name: string;
  color?: string;
  icon?: string;
  textColor?: string;
}
