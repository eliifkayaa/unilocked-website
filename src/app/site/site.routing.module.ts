import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '@common/auth/logged-in.service';
import { LoginComponent } from '@common/auth/login/login.component';
import { ExploreComponent } from 'src/app/site/explore/explore.component';
import { ProjectsComponent } from 'src/app/site/projects/projects.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CompaniesComponent } from './companies/companies.component';
import { FriendsComponent } from './friends/friends.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PeopleComponent } from './people/people.component';
import { SavedComponent } from './saved/saved.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
