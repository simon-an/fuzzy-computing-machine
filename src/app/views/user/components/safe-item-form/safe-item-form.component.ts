import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { SafeItem } from '~core/model';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeItemFormComponent implements OnInit {

  @Output()
  safeItemCreatedEvent: EventEmitter<SafeItem> = new EventEmitter<SafeItem>();

  model: SafeItem = {} as SafeItem;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.safeItemCreatedEvent.emit(this.model);
  }
}
