import { Component, HostBinding, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@common/auth/auth.service';
import { BootstrapDataService } from '@common/core/bootstrap/bootstrap-data.service';
import { SettingsService } from '@common/core/settings/settings.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';
import { BehaviorSubject, catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'unista';
  public loadingBootstrap$ = new BehaviorSubject(true);
  public bootstrapError$ = new BehaviorSubject<any>(null);

  constructor(
    public auth: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public appTheme: AppThemeService,
    public bootstrapData: BootstrapDataService,
    public settings: SettingsService
  ) {
    iconRegistry.addSvgIcon(
      'google',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/google-logo.svg')
    );
    iconRegistry.addSvgIcon(
      'settings_alert',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/settings_alert.svg')
    );
    this.auth.init(location.pathname.replace('login', 'home') || 'home');
  }

  @HostBinding('class')
  get themeMode(): string {
    return this.appTheme.darkMode ? 'dark-theme' : 'light-theme';
  }

  ngOnInit() {
    this.bootstrapData
      .init()
      .pipe(catchError((error) => {
        error.message = 'Failed to load bootstrap data';
        this.bootstrapError$.next(error)
        return throwError(() => error)
      }))
      .pipe(finalize(() => this.loadingBootstrap$.next(false)))
      .subscribe((data) => {
        if (data.success) {
          this.settings.settings = data.data.settings;
        }
      });
  }
}
