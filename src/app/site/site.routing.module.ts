import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '@common/auth/logged-in.service';
import { ExploreComponent } from 'src/app/site/explore/explore.component';
import { ProjectsComponent } from 'src/app/site/projects/projects.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CompaniesComponent } from './companies/companies.component';
import { FriendsComponent } from './friends/friends.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PeopleComponent } from './people/people.component';
import { SavedComponent } from './saved/saved.component';
import { UserProfileComponent } from './profiles/user-profile/user-profile.component';
import { EventsComponent } from './events/events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SchoolComponent } from './school/school.component';
import { CommunityProfileComponent } from './profiles/community-profile/community-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainHomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent, canActivate: [LoggedIn] },
  { path: 'projects', component: ProjectsComponent, canActivate: [LoggedIn] },
  {
    path: 'communities',
    component: CommunitiesComponent,
    canActivate: [LoggedIn],
  },
  { path: 'companies', component: CompaniesComponent, canActivate: [LoggedIn] },
  { path: 'people', component: PeopleComponent, canActivate: [LoggedIn] },
  { path: 'friends', component: FriendsComponent, canActivate: [LoggedIn] },
  { path: 'saved', component: SavedComponent, canActivate: [LoggedIn] },
  {
    path: 'my-profile',
    component: UserProfileComponent,
    canActivate: [LoggedIn],
  },
  { path: 'events', component: EventsComponent, canActivate: [LoggedIn] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [LoggedIn] },

  { path: 'school', component: SchoolComponent, canActivate: [LoggedIn] },

  { path: 'community', component: CommunityProfileComponent, canActivate: [LoggedIn] },
  
  { path : 'search-results', component: SearchResultsComponent, canActivate: [LoggedIn]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
