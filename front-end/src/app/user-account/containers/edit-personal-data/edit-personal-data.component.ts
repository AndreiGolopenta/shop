import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { map, switchMap } from 'rxjs/operators';
import { InputForm } from 'src/app/models/input.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpValidation } from '../sign-up/sign-up-validation.validators';

@Component({
  selector: 'app-edit-personal-data',
  templateUrl: './edit-personal-data.component.html',
  styleUrls: ['./edit-personal-data.component.scss']
})
export class EditPersonalDataComponent implements OnInit, OnDestroy {
  color: string = '#43A047';
  required: boolean = true;
  data: InputForm[] = [
    { name: 'first Name', icon: 'account_circle' },
    { name: 'last Name', icon: 'account_circle' },
    { name: 'address', icon: 'location_city' }
  ];
  form: FormGroup;
  userPersonalDateSubscription: Subscription;
  responseMessage: string;
  user: User;
  token: string;

  constructor(
    private usersService: UsersService,
    private store: Store<fromStore.StoreState>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    if (this.userPersonalDateSubscription) {
      this.userPersonalDateSubscription.unsubscribe();
    }
  }

  buildForm() {
    this.userPersonalDateSubscription = this.store
      .select(fromStore.getUserToken)
      .pipe(
        map((token: string) => {
          this.token = token;
          return token;
        }),
        switchMap((token: string) => {
          return this.usersService.getUserPersonalData(token);
        })
      )
      .subscribe((response: User) => {
        this.user = response;
        this.form = this.fb.group(
          {
            firstName: [response.firstName, Validators.required],
            lastName: [response.lastName, Validators.required],
            address: [response.address, Validators.required]
          },
          { validator: SignUpValidation.userPersonalData(this.user) }
        );
      });
  }

  handleSubmit() {
    this.usersService
      .editUserPersonalData(this.token, this.form.value)
      .subscribe((response: string) => {
        const { firstName, lastName } = this.form.value;
        this.store.dispatch(
          new fromStore.UserUpdateName(`${firstName} ${lastName}`)
        );
        this.responseMessage = response;
        this.userPersonalDateSubscription.unsubscribe();
        this.buildForm();
      });
  }
}
