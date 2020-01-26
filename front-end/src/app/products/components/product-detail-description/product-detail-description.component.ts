import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-detail-description',
  templateUrl: './product-detail-description.component.html',
  styleUrls: ['./product-detail-description.component.scss']
})
export class ProductDetailDescriptionComponent {

  @Input() product: Product;
  @Input() productList: string[];

  get divider() {
    return this.productList.length - 1;
  }
}
