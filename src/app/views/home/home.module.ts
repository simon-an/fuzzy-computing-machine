import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { LayoutingModule } from '~layout/layout.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AdminEmailValidatorDirective } from './directives/admin-email-validator.directive';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeLandingPageComponent,
    RegisterFormComponent,
    AdminEmailValidatorDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutingModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class HomeModule {}
