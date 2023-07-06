import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ContentPublishingHubComponent } from './content-publishing-hub/content-publishing-hub.component';
import { LoggedIn } from '@common/auth/logged-in.service';
import { ContentEditingComponent } from './content-editing/content-editing.component';
import { ProfileContentComponent } from '../site/profiles/profile-content/profile-content.component';
import { ProfileEditingComponent } from './profile-editing/profile-editing.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [LoggedIn],
  },
  {
    path: 'content-publishing-hub',
    component: ContentPublishingHubComponent,
    canActivate: [LoggedIn]
  },
  {
    path: 'content-editing',
    component: ContentEditingComponent,
    canActivate: [LoggedIn]
  },
  {
    path : 'profile-editing',
    component : ProfileEditingComponent,
    canActivate : [LoggedIn]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
