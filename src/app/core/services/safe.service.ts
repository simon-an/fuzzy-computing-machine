import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, timer } from 'rxjs';
import { concatMapTo, map, shareReplay, tap } from 'rxjs/operators';
import { Safe, SafeItem } from '../model';

@Injectable({
  providedIn: 'root'
})
export class SafeService {
  private readonly safesUrl = '/api/safes';

  private safes: ReplaySubject<Safe[]> = new ReplaySubject<Safe[]>();
  private items: Subject<SafeItem[]> = new Subject<SafeItem[]>();

  constructor(private http: HttpClient) {
    timer(1000)
      .pipe(concatMapTo(this.loadSafes()))
      .subscribe(this.safes);
  }

  getSafe(safeId: string): Observable<Safe> {
    return this.safes
      .asObservable()
      .pipe(map(safes1 => safes1.find(safe => safe.id === safeId)));
  }

  loadSafes(): Observable<Safe[]> {
    return this.http.get(this.safesUrl).pipe(map((safes: Safe[]) => safes));
  }

  getSafes(): Observable<Safe[]> {
    return this.safes
      .asObservable()
      .pipe(tap(safes => console.log('get', safes)));
  }

  addItem(safeId: string, item: SafeItem): Observable<SafeItem> {
    const obs = this.http.post(this.safesUrl + `/${safeId}/items`, item).pipe(
      map((response: SafeItem) => response),
      shareReplay(1)
    );

    return obs;
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    const result$ = this.http
      .get(this.safesUrl + `/${safeId}/items`)
      .pipe(map((items: SafeItem[]) => items));
    result$.subscribe(items => {
      // console.log('items loaded ....', items);
      this.items.next(items);
    });
    return result$;
  }
}
