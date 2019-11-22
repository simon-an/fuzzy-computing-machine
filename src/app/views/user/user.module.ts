import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutingModule } from '~layout/layout.module';
import { SafeModule } from './../../safe/safe.module';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserLandingPageComponent,
    SafePageComponent,
    AddSafeItemDialogComponent,
    SafeItemFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutingModule,
    UserRoutingModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SafeModule
  ],
  exports: [AddSafeItemDialogComponent, SafeItemFormComponent],
  entryComponents: [AddSafeItemDialogComponent]
})
export class UserModule {}
