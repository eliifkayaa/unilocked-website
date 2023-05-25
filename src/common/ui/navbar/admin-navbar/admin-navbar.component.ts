import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  @Input('admindrawer') public admindrawer;

  constructor(
    public auth: AuthService,
    public theme: AppThemeService,
    public formBuilder: FormBuilder,
    public router: Router,
    private breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {}

  public logo = new Observable<string>((observer) => {
    this.isMobile.subscribe((isMobile) => {
      if (isMobile) {
        observer.next('assets/img/logo-mobile.png');
      } else {
        observer.next(
          this.theme.darkMode
            ? 'assets/img/logo-white.png'
            : 'assets/img/logo.png'
        );
      }
    });
  });

  public searchForm = this.formBuilder.group({
    query: ['', Validators.min(3)],
  });

  public isMobile = this.breakPointObserver
    .observe("(max-width: 800px)")
    .pipe(map((result) => result.matches));

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
