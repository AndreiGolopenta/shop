import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/nav.interface';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent {
  userActions: Nav[] = [
    {
      name: 'Orders History',
      route: '/auth/user-account/orders-history',
      exact: false
    },
    {
      name: 'Change Password',
      route: '/auth/user-account/change-password',
      exact: false
    },
    {
      name: 'Edit Personal Data',
      route: '/auth/user-account/edit-personal-data',
      exact: false
    },
    {
      name: 'Delete Account',
      route: '/auth/user-account/delete-account',
      exact: false
    }
  ];

}
