import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { scale } from '../../../animations/animations';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [scale]
})
export class ProductCardComponent implements OnInit {

  scaleCardAnimation: boolean = false;
  integerPrice: number;
  decimalPrice: string;

  @Input() product: Product;

  @Output() viewProduct = new EventEmitter<string>();

  ngOnInit() {
    this.integerPrice = Math.floor(this.product.price);
    this.decimalPrice = (this.product.price * 100 - this.integerPrice * 100).toFixed(0);
  }

  onMouseEnter() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  onMouseLeave() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  viewProductDetails() {
    this.viewProduct.emit(this.product._id);
  }

}
