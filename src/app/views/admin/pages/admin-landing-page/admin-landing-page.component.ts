import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
