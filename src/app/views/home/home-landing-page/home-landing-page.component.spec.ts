import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingPageComponent } from './home-landing-page.component';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

import { LayoutingModule } from '~layout/layout.module';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';

describe('HomeLandingPageComponent', () => {
  let component: HomeLandingPageComponent;
  let fixture: ComponentFixture<HomeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandingPageComponent, HeaderWithSidenavComponent],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
