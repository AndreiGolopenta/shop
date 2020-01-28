import { Component, OnInit } from '@angular/core';
import { Nav } from './models/nav.interface';
import * as fromStore from './store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  pluck,
  switchMap,
  filter
} from 'rxjs/operators';
import { ProductFromCart, TableData } from './models/productFromCart.interface';
import { SearchProductsService } from './services/search-products.service';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nav: Nav[] = [
    { name: 'Home', route: '/products', exact: true },
    { name: 'Shirts & Tops', route: '/products/shirts&tops', exact: false },
    { name: 'Shorts & Pants', route: '/products/shorts&pants', exact: false },
    { name: 'Jackets & Vests', route: '/products/jackets&vests', exact: false },
    { name: 'Shoes', route: '/products/shoes', exact: false },
    { name: 'Gloves', route: '/products/gloves', exact: false }
  ];

  cartQuantity$: Observable<number>;
  cartTotal$: Observable<number>;
  userToken$: Observable<string>;
  searchProducts$: Observable<Product[]>;

  constructor(
    private store: Store<fromStore.StoreState>,
    private router: Router,
    private searchProductsService: SearchProductsService
  ) {}

  ngOnInit() {
    this.cartQuantity$ = this.store.select(fromStore.getCart).pipe(
      map((data: ProductFromCart) =>
        Object.values(data).reduce((prev, next: TableData) => {
          return prev + next.quantity;
        }, 0)
      )
    );

    this.cartTotal$ = this.store.select(fromStore.getCartTotal);

    this.userToken$ = this.store.select(fromStore.getUserToken);

    const inputSearch = document.querySelector('#search');

    this.searchProducts$ = fromEvent(inputSearch, 'input').pipe(
      debounceTime(1000),
      pluck('target', 'value'),
      distinctUntilChanged(),
      filter(Boolean),
      switchMap((value: string) => {
        const queryParams = encodeURIComponent(value);
        return this.searchProductsService.searchProducts(queryParams);
      })
    );
  }

  handlleViewCart() {
    this.router.navigate(['/shoppingCart']);
  }

  handleViewUserProfile() {
    this.router.navigate(['/auth/user-account']);
  }

  handleLogIn() {
    this.router.navigate(['/auth']);
  }

  async handleLogout() {
    await this.router.navigate(['/']);
    this.store.dispatch(new fromStore.UserLogOut());
  }

  handleProductDetail(product: Product) {
    const category = product.category
      .split(' ')
      .join('')
      .toLowerCase();
    this.router.navigate([`/products/${category}`, product._id]);
  }

}
