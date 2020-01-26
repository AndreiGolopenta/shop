import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module'
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModuleModule } from '../shared-module/shared-module.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const ROUTES: Routes = [
  { path: '', redirectTo: 'viewCart' },
  {
    path: 'viewCart',
    children: [
      { path: '', component: fromContainers.ViewCartComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES), 
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class ShoppingCartModule {}
