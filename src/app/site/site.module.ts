import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { GuestHomeComponent } from './main-home/guest-home/guest-home.component';
import { UserHomeComponent } from './main-home/user-home/user-home.component';
import { SiteRoutingModule } from './site.routing.module';
import { AppCommonModule } from '@common/common.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ExploreComponent } from './explore/explore.component';
import { AnimatedCounterDirective } from './main-home/guest-home/animated-counter.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsHomeComponent } from './projects/tabs/projects-home/projects-home.component';
import { CommunitiesComponent } from './communities/communities.component';
import { ProjectCardComponent } from './projects/components/project-card/project-card.component';
import { ProjectsFromCommunitiesComponent } from './projects/tabs/projects-from-communities/projects-from-communities.component';
import { ProjectsFromFriendsComponent } from './projects/tabs/projects-from-friends/projects-from-friends.component';
import { MyProjectsComponent } from './projects/tabs/my-projects/my-projects.component';
import { CompaniesComponent } from './companies/companies.component';
import { PeopleComponent } from './people/people.component';
import { PeopleHomeComponent } from './people/panels/people-home/people-home.component';
import { PeopleStudentsComponent } from './people/panels/people-students/people-students.component';
import { PeopleProfessionalsComponent } from './people/panels/people-professionals/people-professionals.component';
import { FriendsComponent } from './friends/friends.component';
import { SavedComponent } from './saved/saved.component';
import { SavedPostsComponent } from './saved/panels/saved-posts/saved-posts.component';
import { PostComponent } from './components/post/post.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsComponent } from './events/events.component';

import { AuthModule } from '@common/auth/auth.module';
import { UserProfileComponent } from './profiles/user-profile/user-profile.component';
import { ProfileContentComponent } from './profiles/profile-content/profile-content.component';
import { MatChipsModule } from '@angular/material/chips';
import { SchoolComponent } from './school/school.component';
import { CommunityProfileComponent } from './profiles/community-profile/community-profile.component';

import { SearchResultsComponent } from './search-results/search-results.component';
import { BrowserModule } from '@angular/platform-browser';

import { CompanyComponent } from './company/company.component';
import { SearchPostsComponent } from './search-results/tabs/search-posts/search-posts.component';
import { SearchPeopleComponent } from './search-results/tabs/search-people/search-people.component';
import { SearchProjectsComponent } from './search-results/tabs/search-projects/search-projects.component';
import { SearchCompaniesComponent } from './search-results/tabs/search-companies/search-companies.component';
import { SearchEventsComponent } from './search-results/tabs/search-events/search-events.component';
import { SearchCommunitiesComponent } from './search-results/tabs/search-communities/search-communities.component';
import { SearchHighlightsComponent } from './search-results/tabs/search-highlights/search-highlights.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [MainHomeComponent, GuestHomeComponent, UserHomeComponent, ExploreComponent, AnimatedCounterDirective, MainMenuComponent, ProjectsComponent, ProjectsHomeComponent, CommunitiesComponent, ProjectCardComponent,ProjectsFromCommunitiesComponent, ProjectsFromFriendsComponent, MyProjectsComponent, CompaniesComponent, PeopleComponent, PeopleHomeComponent, PeopleStudentsComponent, PeopleProfessionalsComponent, FriendsComponent, SavedComponent, SavedPostsComponent, PostComponent, NotificationsComponent, UserProfileComponent, EventsComponent, ProfileContentComponent, CommunityProfileComponent, CompanyComponent, SchoolComponent, SearchResultsComponent, SearchPostsComponent, SearchPeopleComponent, SearchProjectsComponent, SearchCompaniesComponent, SearchEventsComponent, SearchCommunitiesComponent, SearchHighlightsComponent, MainContentComponent, SliderComponent],

  imports: [
    CommonModule,
    BrowserModule,
    LayoutModule,
    SiteRoutingModule,
    AppCommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatTabsModule,
    MatChipsModule,
    
  ],
  
})
export class SiteModule {}