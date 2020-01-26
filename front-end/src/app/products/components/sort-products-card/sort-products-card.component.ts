import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sort-products-card',
  templateUrl: './sort-products-card.component.html',
  styleUrls: ['./sort-products-card.component.scss']
})
export class SortProductsCardComponent implements OnInit {

  sortByOptions: string[] = [
    'Popularity',
    'Price Ascending',
    'Price Descending'
  ];

  form: FormGroup;

  @Input() selectionStock: number;
  @Input() stock: number;
  @Input() sortedBy: string;

  @Output() setSortBy = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      sort: [this.sortedBy]
    })
  }

  onSelect() {
    this.setSortBy.emit(this.form);
  }

}
