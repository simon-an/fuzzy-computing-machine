import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Safe } from '~core/model';

@Component({
  selector: 'cool-safe-list-element',
  templateUrl: './safe-list-element.component.html',
  styleUrls: ['./safe-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeListElementComponent implements OnInit {

  @Input()
  safe: Safe;

  constructor() { }

  ngOnInit() {
  }

}
