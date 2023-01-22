import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginBoxComponent } from './ui/login-box/login-box.component';

@NgModule({
  declarations: [NavbarComponent, LoginBoxComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule,MatButtonModule,MatBadgeModule],
  exports: [NavbarComponent],
})
export class AppCommonModule {}
