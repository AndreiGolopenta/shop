import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filters } from 'src/app/models/filters.interface';
import { FormGroup } from '@angular/forms';
import { ProductAPI } from 'src/app/models/productAPI';

@Component({
  selector: 'app-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent {

  currentPage: number = 1;

  @Input() filters: string[];
  @Input() filterData: Filters;
  @Input() products: ProductAPI;
  @Input() sortedBy: string;

  @Output() applyFilters = new EventEmitter<FormGroup>();
  @Output() removeFilters = new EventEmitter();
  @Output() setSortBy = new EventEmitter<FormGroup>();
  @Output() viewProduct = new EventEmitter<string>();

  handleApplyFilters(event: FormGroup) {
    this.applyFilters.emit(event);
  }

  handleRemoveFilters() {
    this.removeFilters.emit();
  }

  handleSortBy(value: FormGroup) {
    this.setSortBy.emit(value);
  }

  handleViewProduct(event: string) {
    this.viewProduct.emit(event);
  }

}
