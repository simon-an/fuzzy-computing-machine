import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';


const routes: Routes = [
  {
    path: '',
    component: UserLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
