import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {

  @Input('drawer') public drawer

  constructor(public auth:AuthService,public theme:AppThemeService) { }

  ngOnInit(): void {
  }

  public logout() {
    this.auth.logout();
  }

}
