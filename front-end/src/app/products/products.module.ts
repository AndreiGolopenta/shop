import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularMaterialModule } from '../angular-material.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: fromContainers.HomeComponent },
      {
        path: 'shirts&tops',
        children: [
          { path: '', component: fromContainers.ShirtsTopsComponent },
          { path: ':id', component: fromContainers.ProductDetailComponent }
        ]
      },
      {
        path: 'shorts&pants',
        children: [
          { path: '', component: fromContainers.ShortsPantsComponent },
          { path: ':id', component: fromContainers.ProductDetailComponent }
        ]
      },
      {
        path: 'jackets&vests',
        children: [
          { path: '', component: fromContainers.JacketsVestsComponent },
          { path: ':id', component: fromContainers.ProductDetailComponent }
        ]
      },
      {
        path: 'shoes',
        children: [
          { path: '', component: fromContainers.ShoesComponent },
          { path: ':id', component: fromContainers.ProductDetailComponent }
        ]
      },
      {
        path: 'gloves',
        children: [
          { path: '', component: fromContainers.GlovesComponent },
          { path: ':id', component: fromContainers.ProductDetailComponent }
        ]
      }
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
    AngularMaterialModule,
    NgxPaginationModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ]
})
export class ProductsModule {}
