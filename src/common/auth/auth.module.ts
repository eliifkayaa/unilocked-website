import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {  MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslationsModule } from '@common/core/translations/translations.module';
import { MainSettingsComponent } from './settings/main-settings/main-settings.component';
import { AccountSettingsComponent } from './settings/main-settings/panels/account-settings/account-settings.component';
import { SecuritySettingsComponent } from './settings/main-settings/panels/security-settings/security-settings.component';
import { NotificationSettingsComponent } from './settings/main-settings/panels/notification-settings/notification-settings.component';
import { PrivacySettingsComponent } from './settings/main-settings/panels/privacy-settings/privacy-settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AppCommonModule } from '@common/common.module';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainSettingsComponent,
    AccountSettingsComponent,
    SecuritySettingsComponent,
    NotificationSettingsComponent,
    PrivacySettingsComponent
  ],
  imports: [
    AppCommonModule,
    CommonModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    RouterModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    TranslationsModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
