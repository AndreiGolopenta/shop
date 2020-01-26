import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Filters } from 'src/app/models/filters.interface';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UtilityFunctions } from '../utilityFunctions';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductAPI } from 'src/app/models/productAPI';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  @Input() productsDescription: string[];
  @Input() filters: string[];
  @Input() category: string;
  sortedBy: string;
  filterData: Filters;
  route: string;
  products$: Observable<ProductAPI>;
  sortedBySubscription: Subscription;
  filterDataSubscription: Subscription;
  categorySubscription: Subscription;

  constructor(
    private store: Store<fromStore.StoreState>,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categorySubscription = this.store
      .select(fromStore.getActiveCategory)
      .subscribe((value: string) => {
        if (this.category !== value) {
          this.store.dispatch(new fromStore.LoadActiveCategory(this.category));
          this.store.dispatch(
            new fromStore.LoadFilters({
              filters: this.filters,
              category: this.category
            })
          );
        }
      });

    this.filterDataSubscription = this.store
      .select(fromStore.getFilters)
      .subscribe((data: Filters) => {
        this.filterData = data;
      });

    this.sortedBySubscription = this.store
      .select(fromStore.getSortedBy)
      .subscribe((value: string) => {
        this.sortedBy = value;
      });

    const queryParams = UtilityFunctions.createQueryParams(
      this.category,
      this.filterData,
      this.sortedBy
    );

    this.products$ = this.productsService
      .getProducts(queryParams)
      .pipe(delay(400));

    this.route = `/products/${this.category.split(' ').join('').toLowerCase()}`;

    this.store.dispatch(new fromStore.LoadProductsDescription(this.productsDescription))
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.filterDataSubscription.unsubscribe();
    this.sortedBySubscription.unsubscribe();
  }

  async reload() {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    this.router.navigate([this.route]);
  }

  async handleApplyFilters(event: FormGroup) {
    this.store.dispatch(new fromStore.UpdateFilters(event.value));
    this.reload();
  }

  async handleRemoveFilters() {
    this.store.dispatch(new fromStore.ResetFilters());
    this.reload();
  }

  async handleSortBy(event: FormGroup) {
    const sort = event.get('sort') as FormControl;
    this.store.dispatch(new fromStore.SetSortBy(sort.value));
    this.reload();
  }

  handleViewProduct(id: string) {
    this.router.navigate([this.route, id]);
  }
}
