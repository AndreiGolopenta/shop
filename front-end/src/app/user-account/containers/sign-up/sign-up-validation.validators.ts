import { AbstractControl, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.interface';

export class SignUpValidation {
  static emailValidation(control: AbstractControl) {
    const regexp = /^\w+(\.|_)?\w+@\w+\.(com|net|org|ro)$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidEmail: true };
  }

  static repeatPassword(control: AbstractControl) {
    const password = control.get('password') as FormControl;
    const repeatPassword = control.get('repeatPassword') as FormControl;

    return password.value === repeatPassword.value
      ? null
      : { checkPassword: true };
  }

  static userPersonalData(user: User) {
    const { firstName, lastName, address } = user;
    return (control: AbstractControl) => {
      const firstNameControl = control.get('firstName') as FormControl;
      const lastNameControl = control.get('lastName') as FormControl;
      const addressControl = control.get('address') as FormControl;

      return firstNameControl.value !== firstName ||
        lastNameControl.value !== lastName ||
        addressControl.value !== address
        ? null
        : { invalid: true };
    };
  }

  static newPasswordCheck(control: AbstractControl) {
    const currentPassword = control.get('currentPassword') as FormControl;
    const password = control.get('password') as FormControl;
    return currentPassword.value !== password.value
      ? null
      : { invalidNewPassword: true };
  }

  static deleteAccount(control: AbstractControl) {
    const deleteControl = control.get('delete') as FormControl;
    return deleteControl.value === 'delete' ? null : { invalid: true };
  }
}
