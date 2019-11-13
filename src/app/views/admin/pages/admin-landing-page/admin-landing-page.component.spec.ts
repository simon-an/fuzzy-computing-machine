import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingPageComponent } from './admin-landing-page.component';
import { CommonModule } from '@angular/common';
import { LayoutingModule } from '~layout/layout.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';

describe('AdminLandingPageComponent', () => {
  let component: AdminLandingPageComponent;
  let fixture: ComponentFixture<AdminLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLandingPageComponent, HeaderWithSidenavComponent],
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
    fixture = TestBed.createComponent(AdminLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
