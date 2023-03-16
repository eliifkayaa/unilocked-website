import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@common/auth/login/login.component';
import { RegisterComponent } from '@common/auth/register/register.component';
import { MainSettingsComponent } from '@common/auth/settings/main-settings/main-settings.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'register',
    component:RegisterComponent,

  },
  {
    path:'settings',
    component:MainSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
