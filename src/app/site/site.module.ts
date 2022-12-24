import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AppUiModule } from '@common/app-ui/app-ui.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AppUiModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  exports: [HomepageComponent],
})
export class SiteModule {}
