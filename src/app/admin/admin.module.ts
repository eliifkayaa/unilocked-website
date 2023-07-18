import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AppCommonModule } from '@common/common.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ContentPublishingHubComponent } from './content-publishing-hub/content-publishing-hub.component';
import { ContentEditingComponent } from './content-editing/content-editing.component';
import { ProfileEditingComponent } from './profile-editing/profile-editing.component';
import { PartnershipPlatformComponent } from './partnership-platform/partnership-platform.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminMenuComponent,
    ContentPublishingHubComponent,
    ContentEditingComponent,
    ProfileEditingComponent,
    PartnershipPlatformComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class AdminModule { }
