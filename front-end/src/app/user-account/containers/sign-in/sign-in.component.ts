import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputForm } from 'src/app/models/input.interface';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLogInResponse } from 'src/app/models/user.interface';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  errorMessage: string;
  color: string = '#B00020';
  required: boolean = false;
  data: InputForm[] = [
    { name: 'email', icon: 'email', id: 'emailSignIn' },
    { name: 'password', icon: 'lock', id: 'passwordSignIn' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private store: Store<fromStore.StoreState>
  ) {}

  form: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  ngOnInit() {}

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 4000 });
  }

  logIn() {
    this.usersService.userSignIn(this.form.value).subscribe(
      (response: UserLogInResponse) => {
        this.router.navigate(['/']).then(() => {
          const message = `Welcome back ${response.userName}`;
          this.openSnackBar(message);
          this.store.dispatch(new fromStore.UserLogin(response));
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.form.reset('');
      }
    );
  }
}
