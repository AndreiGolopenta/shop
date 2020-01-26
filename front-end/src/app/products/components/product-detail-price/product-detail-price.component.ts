import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-detail-price',
  templateUrl: './product-detail-price.component.html',
  styleUrls: ['./product-detail-price.component.scss']
})
export class ProductDetailPriceComponent {

  @Input() product: Product;

}
