import { SafeRowComponent } from './../../components/safe-row/safe-row.component';
import { SafeListElementComponent } from './../safe-list-element/safe-list-element.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeListComponent } from './safe-list.component';
import { MatListModule } from '@angular/material/list';

describe('SafeListComponent', () => {
  let component: SafeListComponent;
  let fixture: ComponentFixture<SafeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeListComponent, SafeListElementComponent, SafeRowComponent],
      imports: [MatListModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
