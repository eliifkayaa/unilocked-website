import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
})
export class UserNavbarComponent implements OnInit {
  @Input('drawer') public drawer;

  constructor(
    public auth: AuthService,
    public theme: AppThemeService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {}

  public searchForm = this.formBuilder.group({
    query: ['', Validators.min(3)],
  });

  public logout() {
    this.auth.logout();
  }

  public toggleDarkMode() {
    this.theme.darkMode = !this.theme.darkMode;
  }

  public search() {
    this.router.navigate(['/search'], {
      queryParams: { query: this.searchForm.value.query },
    });
    
  }
}
