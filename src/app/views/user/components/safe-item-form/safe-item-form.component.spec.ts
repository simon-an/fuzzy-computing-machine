import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeItemFormComponent } from './safe-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('SafeItemFormComponent', () => {
  let component: SafeItemFormComponent;
  let fixture: ComponentFixture<SafeItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeItemFormComponent],
      imports: [FormsModule, ReactiveFormsModule, NoopAnimationsModule, MatFormFieldModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
