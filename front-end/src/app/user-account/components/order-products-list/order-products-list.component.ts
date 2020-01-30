import { Component, Input } from '@angular/core';
import { OrderContent } from 'src/app/models/order.interface';

@Component({
  selector: 'app-order-products-list',
  templateUrl: './order-products-list.component.html',
  styleUrls: ['./order-products-list.component.scss']
})
export class OrderProductsListComponent {

  @Input() product: OrderContent;

}
