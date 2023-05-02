import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginBoxComponent } from './ui/login-box/login-box.component';
import { GuestNavbarComponent } from './ui/navbar/guest-navbar/guest-navbar.component';
import { UserNavbarComponent } from './ui/navbar/user-navbar/user-navbar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './ui/logo/logo.component';
import { InfoCardComponent } from './ui/info-card/info-card.component';
import { MatCardModule } from '@angular/material/card';
import { LoggedIn } from './auth/logged-in.service';
import { EventCardComponent } from './ui/event-card/event-card.component';

@NgModule({
  declarations: [
    GuestNavbarComponent,
    LoginBoxComponent,
    UserNavbarComponent,
    NavbarComponent,
    LogoComponent,
    InfoCardComponent,
    EventCardComponent,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    RouterModule
  ],
  providers: [LoggedIn],
  exports: [NavbarComponent,InfoCardComponent,EventCardComponent],
})
export class AppCommonModule {}
