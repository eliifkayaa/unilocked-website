import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteModule } from './site/site.module';
import { AppCommonModule } from '@common/common.module';
import { AuthModule } from '@common/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from '@common/core/toast/toast/toast.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoggedIn } from '@common/auth/logged-in.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SiteModule,
    AuthModule,
    HttpClientModule,
    ToastModule,
    MatProgressBarModule,
  ],
  providers: [LoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
