import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
