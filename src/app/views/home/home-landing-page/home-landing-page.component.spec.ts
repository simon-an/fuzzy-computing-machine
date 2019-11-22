import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderWithSidenavComponent } from '~layout/header-with-sidenav/header-with-sidenav.component';
import { LayoutingModule } from '~layout/layout.module';
import { RegisterFormComponent } from '../components/register-form/register-form.component';
import { HomeLandingPageComponent } from './home-landing-page.component';

describe('HomeLandingPageComponent', () => {
  let component: HomeLandingPageComponent;
  let fixture: ComponentFixture<HomeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeLandingPageComponent,
        HeaderWithSidenavComponent,
        RegisterFormComponent
      ],
      imports: [
        CommonModule,
        LayoutingModule,
        NoopAnimationsModule,
        MatListModule,
        RouterTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatListModule,
        MatSelectModule
      ],
      providers: [RouterTestingModule]
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
