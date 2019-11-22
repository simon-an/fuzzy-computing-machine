import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SafeRowComponent } from './safe-row.component';

describe('SafeRowComponent', () => {
  let component: SafeRowComponent;
  let fixture: ComponentFixture<SafeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeRowComponent],
      imports: [MatListModule, NoopAnimationsModule, MatTooltipModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
