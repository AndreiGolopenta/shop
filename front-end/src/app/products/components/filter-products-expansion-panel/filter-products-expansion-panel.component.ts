import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-products-expansion-panel',
  templateUrl: './filter-products-expansion-panel.component.html',
  styleUrls: ['./filter-products-expansion-panel.component.scss']
})
export class FilterProductsExpansionPanelComponent {

  @Input() parent: FormGroup;

}
