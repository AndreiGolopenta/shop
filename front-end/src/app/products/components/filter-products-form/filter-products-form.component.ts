import {
   Component,
   Input,
   Output,
   EventEmitter,
   OnChanges
} from '@angular/core';
import { Filters, Category } from 'src/app/models/filters.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidation } from './form-validation.validators';

@Component({
   selector: 'app-filter-products-form',
   templateUrl: './filter-products-form.component.html',
   styleUrls: ['./filter-products-form.component.scss']
})
export class FilterProductsFormComponent implements OnChanges {
   @Input() filters: string[];
   @Input() filterData: Filters;

   @Output() applyFilters = new EventEmitter<FormGroup>();
   @Output() removeFilters = new EventEmitter();

   form: FormGroup;

   constructor(private fb: FormBuilder) {}

   ngOnChanges() {
      if (this.filterData !== undefined) {
         this.form = this.fb.group(this.createFormArray(this.filters), {
            validator: FormValidation.filtersValidation
         });
      }
   }

   get render() {
      return this.filterData !== undefined ? true : false;
   }

   createFormArray(array: string[]) {
      const mainFormGroup = {};
      for (let prop of array) {
         mainFormGroup[prop] = this.fb.array(
            this.createFormGroup(this.filterData[prop])
         );
      }
      return mainFormGroup;
   }

   createFormGroup(data: Category[]) {
      const formArray = [];
      for (let el of data) {
         const group = this.fb.group({
            name: [el.name],
            checked: [el.checked]
         });
         formArray.push(group);
      }
      return formArray;
   }

   onSubmit() {
      this.applyFilters.emit(this.form);
   }

   handleRemoveFilters() {
      this.removeFilters.emit();
   }

}
