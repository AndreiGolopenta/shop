import { ComponentTemplateComponent } from './component-template/component-template.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterProductsFormComponent } from './filter-products-form/filter-products-form.component';
import { FilterProductsExpansionPanelComponent } from './filter-products-expansion-panel/filter-products-expansion-panel.component';
import { SortProductsCardComponent } from '../components/sort-products-card/sort-products-card.component';
import { ProductDetailDescriptionComponent } from './product-detail-description/product-detail-description.component';
import { ProductDetailOrderComponent } from './product-detail-order/product-detail-order.component';
import { ProductDetailPriceComponent } from './product-detail-price/product-detail-price.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { ProductNamePipe } from './home-category/product-name.pipe';

export const components: any[] = [
  ComponentTemplateComponent,
  ProductCardComponent,
  FilterProductsExpansionPanelComponent,
  FilterProductsFormComponent,
  SortProductsCardComponent,
  ProductDetailDescriptionComponent,
  ProductDetailOrderComponent,
  ProductDetailPriceComponent,
  HomeCardComponent,
  HomeCategoryComponent,
  ProductNamePipe
];
