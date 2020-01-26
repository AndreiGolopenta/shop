import { Component, Input, OnInit } from '@angular/core';
import { Prod } from 'src/app/models/product.interface';
import { scale } from 'src/app/animations/animations';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  animations: [scale]
})
export class HomeCardComponent implements OnInit{

  scaleCardAnimation: boolean = false;
  route: string;

  @Input() product: Prod;
  @Input() categoryName: string;

  ngOnInit() {
    this.route = `/products/${this.categoryName}/${this.product._id}`;
  }

  onMouseEnter() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  onMouseLeave() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }
}
