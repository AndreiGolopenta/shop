import { Component, OnInit, OnDestroy } from '@angular/core';
import { InputForm } from 'src/app/models/input.interface';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { UsersService } from 'src/app/services/users.service';
import { SignUpValidation } from '../sign-up/sign-up-validation.validators';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  color: string;
  required: boolean = true;
  data: InputForm[] = [
    { name: 'current Password', icon: 'lock' },
    { name: 'password', icon: 'lock' },
    { name: 'repeat Password', icon: 'lock' }
  ];
  subscription: Subscription;
  responseMessage: string;

  form: FormGroup = this.fb.group(
    {
      currentPassword: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    {
      validator: [
        SignUpValidation.repeatPassword,
        SignUpValidation.newPasswordCheck
      ]
    }
  );

  constructor(
    private store: Store<fromStore.StoreState>,
    private usersService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get error() {
    const passwordOne = this.form.get('password') as FormControl;
    const passwordTwo = this.form.get('repeatPassword') as FormControl;
    if (
      this.form.hasError('checkPassword') &&
      passwordOne.dirty &&
      !passwordTwo.hasError('minlength') &&
      passwordTwo.dirty &&
      !passwordTwo.hasError('required')
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    const { repeatPassword, ...requestBody } = this.form.value;
    this.subscription = this.store
      .select(fromStore.getUserToken)
      .pipe(
        map((token: string) => token),
        switchMap((token: string) => {
          return this.usersService.changeUserPassword(token, requestBody);
        })
      )
      .subscribe(
        (response: string) => {
          this.form.reset();
          this.form.markAsUntouched();
          this.responseMessage = response;
          this.color = '#43A047';
        },
        err => {
          this.responseMessage = err.error;
          this.color = '#B00020';
          const currentPassword = this.form.get(
            'currentPassword'
          ) as FormControl;
          currentPassword.reset();
          currentPassword.markAsTouched();
        }
      );
  }
}
