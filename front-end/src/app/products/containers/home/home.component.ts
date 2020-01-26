import { Component, OnInit } from '@angular/core';
import { UtilityFunctions } from '../utilityFunctions';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesForHome } from 'src/app/models/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = [
    'Shoes',
    'Gloves',
    'Shirts & Tops',
    'Shorts & Pants',
    'Jackets & Vests'
  ];
  data: Observable<CategoriesForHome>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    const queryParams = UtilityFunctions.createQueryParamsHomePage(
      this.categories
    );
    this.data = this.productsService.get4ProductsPerCategory(queryParams);
  }

  convert(value: string): string {
    switch (value) {
      case 'shirtsTops': {
        return 'shirts&tops';
      }
      case 'shortsPants': {
        return 'shorts&pants';
      }
      case 'jacketsVests': {
        return 'jackets&vests';
      }
      default: {
        return value;
      }
    }
  }
}
