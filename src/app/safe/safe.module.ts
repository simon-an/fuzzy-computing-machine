import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, MatListModule],
  exports: [ItemListComponent]
})
export class SafeModule {}
