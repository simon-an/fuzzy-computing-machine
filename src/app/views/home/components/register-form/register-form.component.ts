import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {
  roles = ['Customer', 'Administrator'];
  state = { email: '', role: 'Customer' };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Register user with email: ', this.state.email);
  }
}
