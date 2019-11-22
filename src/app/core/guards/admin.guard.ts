import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '~core/services/auth.service';
import { map, take, filter, tap, catchError } from 'rxjs/operators';
import { UserTypeGuard, User } from '~core/model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.isUserAdmin();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isUserAdmin();
  }

  isUserAdmin(): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      map((user: User) => user ? UserTypeGuard.Administrator(user) : false),
      tap((canload: boolean) => {
        if (!canload) {
          console.log('error. goback to home.');
          this.router.navigate(['/home']);
        }
      }),
      take(1)
    );
  }
}
