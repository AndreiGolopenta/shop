import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TableData } from 'src/app/models/productFromCart.interface';

@Component({
  selector: 'app-table-quantity-tab',
  templateUrl: './table-quantity-tab.component.html',
  styleUrls: ['./table-quantity-tab.component.scss']
})
export class TableQuantityTabComponent implements OnInit {

  @Input() data: TableData;

  @Output() refreshOrder = new EventEmitter<TableData>();
  @Output() deleteProductFromCart = new EventEmitter<TableData>();

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    quantity: [1, Validators.min(1)]
  });

  ngOnInit() {
    this.form.get('quantity').setValue(this.data.quantity);
  }

  onSubmit() {
    const updateQuantity = {
      ...this.data, ...this.form.value
    }
    this.refreshOrder.emit(updateQuantity);
  }

  deleteFromCart() {
    this.deleteProductFromCart.emit(this.data);
  }

}
