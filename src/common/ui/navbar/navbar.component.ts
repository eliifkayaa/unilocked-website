import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input('drawer') public drawer
  @Input('admindrawer') public admindrawer

  constructor(public authService:AuthService,public router:Router) { }

  isAdmin = this.router.url.includes('admin')
  

  ngOnInit(): void {
  }

}
