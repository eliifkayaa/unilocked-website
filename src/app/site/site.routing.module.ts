import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from 'src/app/site/explore/explore.component';
import { ProjectsComponent } from 'src/app/site/projects/projects.component';
import { CommunitiesComponent } from './communities/communities.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainHomeComponent,
  },
  { path: 'explore', component: ExploreComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'communities', component: CommunitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
