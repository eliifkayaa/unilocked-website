import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  @Input('icon') icon:string
  @Input('color') color:string

  @Input('title') title:string
  @Input('text') text:string
  @Input('buttonText') buttonText:string
  @Output('buttonClick') buttonClick = new EventEmitter()

  public person1 = {
    name: "Halil Nuroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/turkcell-logo.png",
    shortDesc: "16.747 Takipçi • İletişim Sektörü Şirketi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    follow: "Takip Et",
    details: "Arçelik kurumunda çalışıyor",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public person2 = {
    name: "Felya Varol",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/turkcell-logo.png",
    shortDesc: "16.747 Takipçi • İletişim Sektörü Şirketi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    follow: "Takip Ediliyor",
    details: "Arçelik kurumunda çalışıyor",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public person3 = {
    name: "Elif Kemertaş",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/warner-logo.png",
    shortDesc: "16.747 Takipçi • İletişim Sektörü Şirketi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    follow: "Takip Ediliyor",
    details: "Arçelik kurumunda çalışıyor",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public person4 = {
    name: "Elif Kemertaş",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/turkcell-logo.png",
    shortDesc: "16.747 Takipçi • İletişim Sektörü Şirketi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    follow: "Takip Et",
    details: "Arçelik kurumunda çalışıyor",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public people = [
    this.person1,
    this.person2,
    this.person3,
    this.person4
  ];

  public human1 = {
    name: "Halil Nuroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar1.png",
    shortDesc: "Konuşmacı • 21 Mart 2023 - 14:00",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    follow: "Takip Et",
  };
  
  public human2 = {
    name: "Felya Varol",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar3.png",
    shortDesc: "Etkinlik Düzenleyicisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    follow: "Takip Ediliyor"
  };
  
  public human3 = {
    name: "Abdullah Ustaömeroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar2.png",
    shortDesc: "Konuşmacı ve Etkinlik Düzenleyicisi • 21 Mart 2023 - 10:05",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    details: "Arçelik kurumunda çalışıyor",
    follow: "Takip Ediliyor",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public human4 = {
    name: "Kathryn Murphy",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar4.png",
    shortDesc: "Etkinlik Düzenleyicisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    details: "Arçelik kurumunda çalışıyor",
    follow: "Takip Et",
    logo: "assets/img/arcelik-logo.png"
  };
  
  public humans = [
    this.human1,
    this.human2,
    this.human3,
    this.human4
  ];

  public being1 = {
    name: "Halil Nuroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar1.png",
    shortDesc: "PlayStation Türkiye • İnsan Kaynakları Yöneticisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    details: "İktisadi ve İdari Bilimler Fakültesi • İktisat Bölümü • 2016 - 2020",
    follow: "Takip Et",
  };
  
  public being2 = {
    name: "Felya Varol",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar3.png",
    shortDesc: "Turkcell • Software Developer",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    details: "Mühendislik Fakültesi • Bilgisayar Mühendisliği Bölümü • 2013 - 2018",
    follow: "Takip Et"
  };
  
  public being3 = {
    name: "Abdullah Ustaömeroğlu",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar2.png",
    shortDesc: "Adobe • UI Designer",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#c9cbfb",
      color: "#4b53f2",
    },
    hasIcon: true,
    details: "Mühendislik Fakültesi • Bilgisayar Mühendisliği Bölümü • 2002 - 2007",
    follow: "Takip Et"
  };
  
  public being4 = {
    name: "Kathryn Murphy",
    backdrop: "assets/img/person1-back.png",
    avatar: "assets/img/avatar4.png",
    shortDesc: "Turkcell • İnsan Kaynakları Yöneticisi",
    buttonStyle: {
      borderStyle: "none",
      backgroundColor: "#444BDA",
      color: "#fff",
    },
    hasIcon: false,
    details: "İktisadi ve İdari Bilimler Fakültesi • İktisat Bölümü • 2010 - 2014",
    follow: "Takip Et"
  };
  
  public beings = [
    this.being1,
    this.being2,
    this.being3,
    this.being4
  ];

}
