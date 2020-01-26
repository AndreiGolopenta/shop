import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromFilters from '../reducers/filters.reducers';

export const getFilters = createSelector(
  fromFeature.getFiltersState,
  (state: fromFilters.FiltersState) => state.filters
);

export const getSortedBy = createSelector(
  fromFeature.getFiltersState,
  (state: fromFilters.FiltersState) => state.sortBy
);

export const getActiveCategory = createSelector(
  fromFeature.getFiltersState,
  (state: fromFilters.FiltersState) => state.category
);

export const getProductsDescription = createSelector(
  fromFeature.getFiltersState,
  (state: fromFilters.FiltersState) => state.productsDescription
);
