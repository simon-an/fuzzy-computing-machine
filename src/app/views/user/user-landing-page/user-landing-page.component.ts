import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'cool-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLandingPageComponent implements OnInit {

  safeId$ = of(1);

  constructor() { }

  ngOnInit() {
  }

}
