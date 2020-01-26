import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ShopHeaderModule {}
