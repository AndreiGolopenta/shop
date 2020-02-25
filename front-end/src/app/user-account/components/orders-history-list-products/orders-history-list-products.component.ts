import { Component, Input } from '@angular/core';
import { OrderContent } from 'src/app/models/order.interface';

@Component({
  selector: 'app-orders-history-list-products',
  templateUrl: './orders-history-list-products.component.html',
  styleUrls: ['./orders-history-list-products.component.scss']
})
export class OrdersHistoryListProductsComponent {

  open: boolean = false;

  @Input() products: OrderContent[];

  handleViewList() {
    this.open = !this.open;
  }

}
