import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public post = {

  }

  public account1 = {
    image:"assets/img/acc1.jpeg",
    name:"Ayşe K.",
    info:"Teacher"
  }

  public account2 = {
    image:"assets/img/acc2.jpeg",
    name:"Roketsan",
    info:"Şirket • Savunma Sanayi ve Uzay"
  }

  public account3 = {
    image:"assets/img/acc3.jpeg",
    name:"Havelsan",
    info:"Şirket • Savunma ve Bilgi Teknolojileri"
  }

  public account4 = {
    image:"assets/img/acc4.jpeg",
    name:"Havelsan",
    info:"Şirket • Savunma ve Bilgi Teknolojileri"
  }

  public users = [
    this.account1,
    this.account2,
    this.account3
  ]

  public posts = [
    this.post,
    this.post,
    this.post
  ]

}
