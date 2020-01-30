import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { OrdersService } from 'src/app/services/orders.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-orders-history',
  templateUrl: './user-orders-history.component.html',
  styleUrls: ['./user-orders-history.component.scss']
})
export class UserOrdersHistoryComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(
    private store: Store<fromStore.StoreState>,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.orders$ = this.store.select(fromStore.getUserToken).pipe(
      map((token: string) => token),
      switchMap((token: string) => {
        return this.ordersService.getOrdersHistory(token);
      })
    );
  }
}
