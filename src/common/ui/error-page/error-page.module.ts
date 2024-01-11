import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ErrorPageComponent } from './error-page.component';
import { TranslationsModule } from '@common/core/translations/translations.module';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslationsModule
  ],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
