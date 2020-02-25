import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputForm } from 'src/app/models/input.interface';

@Component({
   selector: 'app-input-field',
   templateUrl: './input-field.component.html',
   styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
   @Input() parent: FormGroup;
   @Input() element: InputForm;
   @Input() required: boolean;

   get inputType(): string {
      switch (this.element.name) {
         case 'email': {
            return 'email';
         }
         case 'current Password':
         case 'repeat Password':
         case 'password': {
            return 'password';
         }
         default: {
            return 'text';
         }
      }
   }

   get requiredAttribute() {
      return !this.element.name.includes('word') ? true : false;
   }

   get formControlName(): string {
      return this.element.name.split(' ').join('');
   }

   get minLengthError() {
      return (
         this.parent.get(this.formControlName).hasError('minlength') &&
         this.parent.get(this.formControlName).touched
      );
   }

   get requiredError() {
      return (
         this.parent.get(this.formControlName).hasError('required') &&
         this.parent.get(this.formControlName).touched
      );
   }

   get emailError() {
      return (
         this.parent.get(this.formControlName).hasError('invalidEmail') &&
         !this.requiredError &&
         this.parent.get(this.formControlName).touched
      );
   }
}
