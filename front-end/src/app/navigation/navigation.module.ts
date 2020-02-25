import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
   declarations: [...fromComponents.components],
   exports: [...fromComponents.components],
   imports: [CommonModule, RouterModule]
})
export class NavigationModule {}
