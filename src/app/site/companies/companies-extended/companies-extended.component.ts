import { Component } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'companies-extended',
  templateUrl: './companies-extended.component.html',
  styleUrls: ['./companies-extended.component.scss']
})
export class CompaniesExtendedComponent {
  constructor(public auth:AuthService) { }

  public company1 = {
    name:"PlayStation Türkiye",
    backdrop:"assets/img/ps3-back.png",
    avatar:"assets/img/ps3.jpeg",
    shortDesc:"Eğlence Sektörü Şirketi"
  }

  public companies = [
    this.company1,
    this.company1,
    this.company1,
    this.company1
    ]

  ngOnInit(): void {
  }
}
