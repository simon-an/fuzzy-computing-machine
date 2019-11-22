import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';

const routes: Routes = [
  {
    path: 'safes/:id',
    component: SafePageComponent
  },
  {
    path: '',
    component: UserLandingPageComponent
  },
  {
    path: 'safes/:id',
    component: SafePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
