import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '@common/auth/logged-in.service';
import { LoginComponent } from '@common/auth/login/login.component';
import { NotLoggedIn } from '@common/auth/not-logged-in.service';
import { RegisterComponent } from '@common/auth/register/register.component';
import { MainSettingsComponent } from '@common/auth/settings/main-settings/main-settings.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate: [NotLoggedIn]
  },
  {
    path:'register',
    component:RegisterComponent,

  },
  {
    path:'settings',
    component:MainSettingsComponent,
    canActivate: [LoggedIn]
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
