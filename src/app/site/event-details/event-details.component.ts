import { Component } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

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

  public person5 = {
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
  };
  
  public person6 = {
    name: "Elif Kemertaş",
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
  };
  
  public person7 = {
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
  };
  
  public person8 = {
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
  };
  
  public people2 = [
    this.person5,
    this.person6,
    this.person7,
    this.person8
  ];

  public person9 = {
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
  };
  
  public person10 = {
    name: "Elif Kemertaş",
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
  };
  
  public person11 = {
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
  };
  
  public person12 = {
    name: "Kathryn Murphy",
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
  };
  
  public people3 = [
    this.person5,
    this.person6,
    this.person7,
    this.person8
  ];

}
