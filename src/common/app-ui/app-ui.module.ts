import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    NavbarButtonComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [
    NavbarComponent
  ],


})
export class AppUiModule { }
