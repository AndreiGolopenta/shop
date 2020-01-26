import { Component, OnInit, Input } from '@angular/core';
import { TableData } from 'src/app/models/productFromCart.interface';

@Component({
  selector: 'app-table-product-tab',
  templateUrl: './table-product-tab.component.html',
  styleUrls: ['./table-product-tab.component.scss']
})
export class TableProductTabComponent implements OnInit {

  @Input() data: TableData;

  ngOnInit() {
  }

}
