import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';

import { LayoutingModule } from '~layout/layout.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';

@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutingModule,
    MatListModule
  ]
})
export class HomeModule { }
