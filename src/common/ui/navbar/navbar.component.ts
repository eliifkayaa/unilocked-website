import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input('drawer') public drawer

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
