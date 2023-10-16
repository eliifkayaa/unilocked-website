import { Component, ElementRef, HostListener } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'discovery-catalog',
  templateUrl: './discovery-catalog.component.html',
  styleUrls: ['./discovery-catalog.component.scss']
})
export class DiscoveryCatalogComponent {
  constructor(private elementRef: ElementRef) {}

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

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;

    if (clickedElement.classList.contains('chip-text')) {
      const selectedTagsDiv = document.querySelector('.selected-tags') as HTMLElement;
      selectedTagsDiv.style.opacity = '1';
      selectedTagsDiv.style.zIndex = "12";
    }
  }




}
export interface Keys {
  name: string;
  color?: string;
  icon?: string;
  textColor?: string;
}
