import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Safe } from '~core/model';
import { SafeRowComponent } from '../../components/safe-row/safe-row.component';
import { SafeListElementComponent } from './safe-list-element.component';

describe('SafeListElementComponent', () => {
  let component: SafeListElementComponent;
  let fixture: ComponentFixture<SafeListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeListElementComponent, SafeRowComponent],
      imports: [NoopAnimationsModule, MatTooltipModule, MatListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeListElementComponent);
    component = fixture.componentInstance;
    component.safe = { id: '123' } as Safe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
