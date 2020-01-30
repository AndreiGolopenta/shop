import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditPersonalDataComponent } from './edit-personal-data/edit-personal-data.component';
import { UserOrdersHistoryComponent } from './user-orders-history/user-orders-history.component';

export const containers: any[] = [
  SignInComponent,
  SignUpComponent,
  UserProfileComponent,
  ChangePasswordComponent,
  EditPersonalDataComponent,
  UserOrdersHistoryComponent
];

export * from './sign-in/sign-in.component';
export * from './sign-up/sign-up.component';
export * from './user-profile/user-profile.component';
export * from './user-orders-history/user-orders-history.component';
export * from './change-password/change-password.component';
export * from './edit-personal-data/edit-personal-data.component';