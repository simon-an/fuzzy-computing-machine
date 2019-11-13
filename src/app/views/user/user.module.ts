import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';


@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
