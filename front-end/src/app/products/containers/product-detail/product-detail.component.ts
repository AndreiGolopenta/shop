import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { map, switchMap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductFromCart } from 'src/app/models/productFromCart.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;
  productList$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      map(params => params.id),
      switchMap((id: string) => {
        return this.productsService.getProduct(id).pipe(delay(300));
      })
    );

    this.productList$ = this.store.select(fromStore.getProductsDescription);
  }

  handleOrder(event: ProductFromCart) {
    this.store.dispatch(new fromStore.AddToCart(event));
  }
}
