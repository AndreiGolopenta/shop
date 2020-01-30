import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUpValidation } from '../sign-up/sign-up-validation.validators';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  color: string = '#3f51b5';
  user$: Observable<string>;
  subscription: Subscription;

  form: FormGroup = this.fb.group(
    {
      delete: ['']
    },
    { validator: SignUpValidation.deleteAccount }
  );

  constructor(
    private store: Store<fromStore.StoreState>,
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user$ = this.store.select(fromStore.getUserName);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteAccount() {
    this.subscription = this.store
      .select(fromStore.getUserToken)
      .pipe(
        map((token: string) => token),
        switchMap((token: string) => this.usersService.deleteUserAccount(token))
      )
      .subscribe((response: string) => {
        this.router.navigate(['/']).then(() => {
          this.snackBar.open(response, '', { duration: 4000 });
          this.store.dispatch(new fromStore.UserLogOut());
        });
      });
  }
}
