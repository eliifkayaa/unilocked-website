import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  public testClick() {

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
