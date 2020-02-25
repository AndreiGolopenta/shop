import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order.interface';

@Component({
   selector: 'app-orders-history-list',
   templateUrl: './orders-history-list.component.html',
   styleUrls: ['./orders-history-list.component.scss']
})
export class OrdersHistoryListComponent implements OnInit {
   open: boolean = false;

   @Input() orders: Order[];

   ngOnInit() {}
}
