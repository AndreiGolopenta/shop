import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { InputForm } from 'src/app/models/input.interface';
import { SignUpValidation } from './sign-up-validation.validators';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  errorMessage: string;
  color: string = '#B00020';
  required: boolean = true;
  data: InputForm[] = [
    { name: 'first Name', icon: 'account_circle', id: 'firstNameSignUp' },
    { name: 'last Name', icon: 'account_circle', id: 'lastNameSignUp' },
    { name: 'address', icon: 'location_city', id: 'addressSignUp' },
    { name: 'email', icon: 'email', id: 'emailSignUp' },
    { name: 'password', icon: 'lock', id: 'passwordSignUp' },
    { name: 'repeat Password', icon: 'lock', id: 'repeatPasswordSignUp' }
  ];

  cartValueSubscription: Subscription;
  cartTotalValue: number;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store<fromStore.StoreState>
  ) {}

  form: FormGroup = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [SignUpValidation.emailValidation, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    { validator: SignUpValidation.repeatPassword }
  );

  ngOnInit() {
    this.cartValueSubscription = this.store
      .select(fromStore.getCartTotal)
      .subscribe((value: number) => (this.cartTotalValue = value));
  }

  ngOnDestroy() {
    this.cartValueSubscription.unsubscribe();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }

  signUp() {
    const { ['repeatPassword']: removed, ...user } = this.form.value;
    this.usersService.userSignUp(user).subscribe(
      async (response: string) => {
        if (this.cartTotalValue) {
          await this.router.navigate(['/shoppingCart/viewCart']);
          this.openSnackBar(response);
        } else {
          await this.router.navigate(['/auth/sign-in']);
          this.openSnackBar(response);
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.form.get('email').setValue('');
      }
    );
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
}
