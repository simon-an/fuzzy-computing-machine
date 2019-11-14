import { RouterTestingModule } from '@angular/router/testing';
import { SafeModule } from './../../../safe/safe.module';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { LayoutingModule } from '~layout/layout.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { UserLandingPageComponent } from './user-landing-page.component';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { from, of } from 'rxjs';

describe('UserLandingPageComponent', () => {
  let component: UserLandingPageComponent;
  let fixture: ComponentFixture<UserLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserLandingPageComponent, HeaderWithSidenavComponent],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
        MatIconModule,
        SafeModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
