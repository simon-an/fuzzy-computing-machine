import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { delay, filter } from 'rxjs/operators';
import { SafeItem } from '~core/model';
import { SafeInMemDataService } from './in-memory-safe.service';
import { SafeService } from './safe.service';

describe('SafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true
        })
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: SafeService = TestBed.inject(SafeService);
    expect(service).toBeTruthy();
  });
  it('test safe id 1', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service.getSafe('1').subscribe(safe => {
      expect(safe.active).toBe(true);
      expect(new Date(safe.activeSince)).toEqual(new Date(Date.UTC(1999, 1, 1)));
      expect(safe.id).toBe('1');
      expect(safe.itemSize).toBe(2);
      expect(safe.value).toBe(999);
      expect(safe.users.length).toBe(1);
      done();
    });
  });
  it('test safe id 2', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service.getSafe('2').subscribe(safe => {
      expect(safe.active).toBe(true);
      expect(new Date(safe.activeSince)).toEqual(new Date(Date.UTC(2018, 11, 30)));
      expect(safe.id).toBe('2');
      expect(safe.itemSize).toBe(3);
      expect(safe.value).toBe(123);
      expect(safe.users.length).toBe(3);
      done();
    });
  });
  it('test safe id 0', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service.getSafe('0').subscribe(safe => {
      expect(safe).toBeUndefined();
      done();
    });
  });
  it('test safe id 3', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service.getSafe('3').subscribe(safe => {
      expect(safe).toBeUndefined();
      done();
    });
  });

  it('test safe items for safeId: 1', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service
      .getItems('1')
      .pipe(filter(Boolean))
      .subscribe((items: SafeItem[]) => {
        expect(items.length).toBe(2);
        done();
      });
  });
  it('test safe items for safeId: 2', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service
      .getItems('2')
      .pipe(filter(Boolean))
      .subscribe((items: SafeItem[]) => {
        expect(items.length).toBe(3);
        done();
      });
  });
  it('test safe items for invalid id', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service
      .getItems('12342453452343638234')
      .pipe(delay(2100))
      .subscribe(items => {
        expect(items).toEqual([]);
        done();
      });
  });
  it('test safes', (done: DoneFn) => {
    const service: SafeService = TestBed.inject(SafeService);
    service
      .getSafes()
      .pipe(delay(2100))
      .subscribe(safes => {
        expect(safes.length).toEqual(2);
        done();
      });
  });
});
