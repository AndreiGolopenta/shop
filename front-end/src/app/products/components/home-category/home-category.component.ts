import { Component, Input } from '@angular/core';
import { Prod } from 'src/app/models/product.interface';
import { scale } from '../../../animations/animations';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss'],
  animations: [scale]
})
export class HomeCategoryComponent {

  scaleCardAnimation: boolean = false;

  @Input() category: Prod[];
  @Input() categoryName: string;

  get formatName(): string {
    return this.categoryName
      .split('&')
      .map(
        (value: string) =>
          `${value.charAt(0).toUpperCase()}${value.substring(1)}`
      )
      .join(' & ');
  }

  get route(): string {
    return `/products/${this.categoryName}`;
  }

  onMouseEnter() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }

  onMouseLeave() {
    this.scaleCardAnimation = !this.scaleCardAnimation;
  }
}
