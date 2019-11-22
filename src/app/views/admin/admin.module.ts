import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutingModule } from '~layout/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SafeRowComponent } from './components/safe-row/safe-row.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';

@NgModule({
  declarations: [
    AdminLandingPageComponent,
    SafeListComponent,
    SafeListElementComponent,
    SafeRowComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: []
})
export class AdminModule {}
