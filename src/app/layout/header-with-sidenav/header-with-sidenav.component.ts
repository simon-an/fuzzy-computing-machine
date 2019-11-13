import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'cool-header-with-sidenav',
  templateUrl: './header-with-sidenav.component.html',
  styleUrls: ['./header-with-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWithSidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
