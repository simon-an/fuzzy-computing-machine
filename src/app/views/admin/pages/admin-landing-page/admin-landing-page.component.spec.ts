import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';
import { LayoutingModule } from '~layout/layout.module';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { SafeListComponent } from '../../container/safe-list/safe-list.component';
import { SafeListElementComponent } from './../../container/safe-list-element/safe-list-element.component';
import { AdminLandingPageComponent } from './admin-landing-page.component';

describe('AdminLandingPageComponent', () => {
  let component: AdminLandingPageComponent;
  let fixture: ComponentFixture<AdminLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminLandingPageComponent,
        HeaderWithSidenavComponent,
        SafeListComponent,
        SafeListElementComponent,
        SafeRowComponent
      ],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
        RouterTestingModule,
        MatTooltipModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
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
