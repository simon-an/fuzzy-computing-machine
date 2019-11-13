import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { LayoutingModule } from '~layout/layout.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { UserLandingPageComponent } from './user-landing-page.component';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';

describe('UserLandingPageComponent', () => {
  let component: UserLandingPageComponent;
  let fixture: ComponentFixture<UserLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLandingPageComponent, HeaderWithSidenavComponent ],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
      ],
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
