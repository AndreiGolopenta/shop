import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ErrorMessageComponent } from './componenets/error-message/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
  imports: [CommonModule, MatIconModule]
})
export class SharedModuleModule {}
