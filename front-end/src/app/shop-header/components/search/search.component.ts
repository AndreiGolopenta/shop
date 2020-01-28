import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() products: Product[];

  @Output() productDetail = new EventEmitter<Product>();
  @Output() resetSearch = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    search: ['']
  });

  get noProductsMessage(): boolean {
    if (this.products) {
      return this.form.get('search').value && !this.products.length
        ? true
        : false;
    }
  }

  viewProduct(value: Product, input: HTMLInputElement) {
    this.form.get('search').setValue('');
    input.blur();
    this.productDetail.emit(value);
  }

}
