import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { LayoutingModule } from '~layout/layout.module';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';


@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [
    CommonModule,
    LayoutingModule,
    UserRoutingModule,
    MatListModule
  ]
})
export class UserModule { }
