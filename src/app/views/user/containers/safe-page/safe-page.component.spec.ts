import { SafeService } from '~core/services';
import { Safe } from '~core/model';
import { RouterTestingModule } from '@angular/router/testing';
import { MatListModule } from '@angular/material/list';
import { LayoutingModule } from './../../../../layout/layout.module';
import { SafeModule } from './../../../../safe/safe.module';
import { MatIconModule } from '@angular/material/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafePageComponent } from './safe-page.component';
import { of, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SafePageComponent', () => {
  let component: SafePageComponent;
  let fixture: ComponentFixture<SafePageComponent>;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafePageComponent],
      imports: [MatIconModule, SafeModule, LayoutingModule, MatListModule, NoopAnimationsModule, RouterTestingModule],
      providers: [{
        // provide: ActivatedRoute, useValue: {
        //   paramMap: from([{ id: 1 }]),
        //   params: from([{ id: 1 }]),
        //   snapshot: {}
        // }
        provide: ActivatedRoute, useClass: ActivatedRouteMock
      }]
    })
      .compileComponents();

    const service: SafeService = TestBed.inject(SafeService);
    spy = spyOn(service, 'getSafe').and.returnValue(of({ id: '1' } as Safe));
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SafePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  }));
});

import { convertToParamMap } from '@angular/router';


export class ActivatedRouteMock {
  public paramMap = of(convertToParamMap({
    id: 'abc123',
  }));
}
