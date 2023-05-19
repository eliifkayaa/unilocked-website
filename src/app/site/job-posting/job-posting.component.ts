import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent {

  public person1 = {
    name: "Halil Nuroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar1.png",
    shortDesc: "Turkcell • İnsan Kaynakları Yöneticisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: false,
    follow: "Bağlantı Kur"
  };
  
  public person2 = {
    name: "Elif Kemertaş",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar3.png",
    shortDesc: "PlayStation Türkiye • İnsan Kaynakları Yöneticisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    follow: "Takip Ediliyor"
  };
  
  public person3 = {
    name: "Elif Kemertaş",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar2.png",
    shortDesc: "Warner Music Türkiye",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    follow: "Takip Ediliyor"
  };
  
  public person4 = {
    name: "Elif Kemertaş",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/person1.png",
    shortDesc: "PlayStation Türkiye • İnsan Kaynakları Yöneticisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: false,
    follow: "Bağlantı Kur"
  };
  
  public people = [
    this.person1,
    this.person2,
    this.person3,
    this.person4
  ];

  keys: Keys[] = [
    {name: 'UI Designer'},
    {name: 'remote'},
    {name: 'Software Engineer'},
    {name: 'Senior Software Engineer'},
    {name: 'Türkiye'},
    {name: 'Staj'},
    {name: 'Java'},
    {name: 'C (Programlama Dili)'},
    {name: 'Figma'},
  ];
  drop(event: CdkDragDrop<Keys[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
  }
  
}
export interface Keys {
  name: string;
}

