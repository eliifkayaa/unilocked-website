import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoggedIn } from '@common/auth/logged-in.service';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [LoggedIn],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
