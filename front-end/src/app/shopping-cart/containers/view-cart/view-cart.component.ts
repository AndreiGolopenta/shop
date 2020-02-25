import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import {
  ProductFromCart,
  TableData
} from 'src/app/models/productFromCart.interface';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserLogIn, UserLogInResponse } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderRequest } from 'src/app/models/order.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit, OnDestroy {
  colorForTable: string = '#3949ab';
  colorForRegistrationError: string = '#B00020';
  cart$: Observable<TableData[]>;
  total$: Observable<number>;
  userName$: Observable<string>;
  errorMessage: string = '';
  orderSubscription: Subscription;
  tokenSubscription: Subscription;
  orderRequest: OrderRequest;
  token: string;

  constructor(
    private store: Store<fromStore.StoreState>,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.cart$ = this.store
      .select(fromStore.getCart)
      .pipe(map((data: ProductFromCart) => Object.values(data)));

    this.total$ = this.store.select(fromStore.getCartTotal);

    this.userName$ = this.store.select(fromStore.getUserName);

    this.tokenSubscription = this.store
      .select(fromStore.getUserToken)
      .subscribe((value: string) => (this.token = value));

    this.orderSubscription = this.cart$
      .pipe(
        map((data: TableData[]) => {
          const orderContent = data.map((product: TableData) => {
            return {
              product: product.product._id,
              size: product.size,
              quantity: product.quantity
            };
          });
          const date = Date.now();
          return { orderContent, date };
        }),
        switchMap(data => {
          return this.total$.pipe(
            map((value: number) => {
              return { ...data, total: value };
            })
          );
        })
      )
      .subscribe((data: OrderRequest) => (this.orderRequest = data));
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
    this.tokenSubscription.unsubscribe();
  }

  calculatePrice(quantity: number, price: number) {
    return (quantity * price).toFixed(2);
  }

  utility(data: TableData): ProductFromCart {
    const id = `${data.product._id}${data.size}`;
    return { [id]: data };
  }

  handleRefreshOrder(event: TableData) {
    const value = this.utility(event);
    this.store.dispatch(new fromStore.AddToCart(value));
  }

  handleDeleteProductFromCart(event: TableData) {
    const value = this.utility(event);
    this.store.dispatch(new fromStore.RemoveFromCart(value));
  }

  handleLogin(data: UserLogIn) {
    this.usersService.userSignIn(data).subscribe(
      (response: UserLogInResponse) => {
        this.store.dispatch(new fromStore.UserLogin(response));
        const message = `Your are signed in as: ${response.userName}`;
        this.snackBar.open(message, '', { duration: 3000 });
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  handlePlaceOrder() {
    this.ordersService
      .placeOrder(this.orderRequest, this.token)
      .subscribe(response => {
        this.snackBar.open(response.message, '', { duration: 3000 });
        this.store.dispatch(new fromStore.EmptyCart());
        this.router.navigate(['/']);
      });
  }
}
