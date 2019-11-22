import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AuthService} from '~core/services/auth.service';
import {LoginData} from '~core/model';
import {Router} from '@angular/router';

@Component({
  selector: 'cool-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLandingPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(loginAsRole: 'Administrator' | 'Customer') {
    this.authService
    .login({role: loginAsRole, email: 'test@coolsafe.de'} as LoginData)
    .subscribe(user => {
      if (user.role === 'Customer') {
        this.router.navigate(['user']);
      }
      if (user.role === 'Administrator') {
        this.router.navigate(['admin']);
      }
    });
  }

}
