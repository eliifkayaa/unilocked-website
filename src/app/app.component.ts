import { Component, HostBinding } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unista';

  constructor(public auth:AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public appTheme:AppThemeService) {
    iconRegistry.addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('assets/img/google-logo.svg'));
    iconRegistry.addSvgIcon('settings_alert', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/settings_alert.svg'));

    auth.init(location.pathname.replace('login','home') || 'home');
  }

  @HostBinding('class')
  get themeMode() : string {
    return this.appTheme.darkMode ? 'dark-theme' : 'light-theme';
  }
  
}
