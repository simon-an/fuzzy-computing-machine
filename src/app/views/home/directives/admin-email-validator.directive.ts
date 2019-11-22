import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn, FormGroup } from '@angular/forms';

export const adminDomainValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const role = control.get('role');
  const email = control.get('email');

  return role
    && email
    && role.value === 'Administrator'
    && !email.value.includes('@metafinanz.de')
    ? {specialAdmin: true}
    : null;
};

@Directive({
  selector: '[coolAdminEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AdminEmailValidatorDirective,
      multi: true,
    }
  ]
})
export class AdminEmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return adminDomainValidator(control);
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }

  constructor() {}
}
