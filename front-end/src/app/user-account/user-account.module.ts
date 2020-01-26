import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AngularMaterialModule } from '../angular-material.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'sign-in' },
      { path: 'sign-in', component: fromContainers.SignInComponent },
      { path: 'sign-up', component: fromContainers.SignUpComponent },
      {
        path: 'user-account',
        canActivate: [AuthGuard],
        component: fromContainers.UserProfileComponent
      }
    ]
  }
];

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    AngularMaterialModule,
    SharedModuleModule
  ]
})
export class UserAccountModule {}
