import { RouterTestingModule } from '@angular/router/testing';
import { SafeListElementComponent } from './../../container/safe-list-element/safe-list-element.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingPageComponent } from './admin-landing-page.component';
import { CommonModule } from '@angular/common';
import { LayoutingModule } from '~layout/layout.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';
import { SafeListComponent } from '../../container/safe-list/safe-list.component';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('AdminLandingPageComponent', () => {
  let component: AdminLandingPageComponent;
  let fixture: ComponentFixture<AdminLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLandingPageComponent, HeaderWithSidenavComponent, SafeListComponent, SafeListElementComponent, SafeRowComponent],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
        RouterTestingModule,
        MatTooltipModule,
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
