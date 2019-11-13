import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { LayoutingModule } from '~layout/layout.module';


@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutingModule,
    MatListModule
  ]
})
export class AdminModule { }
