import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromFilters from './filters.reducers';
import * as fromCart from './cart.reducers';
import * as fromUser from './user.reducers';

export interface StoreState {
  filters: fromFilters.FiltersState;
  cart: fromCart.CartState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<StoreState> = {
  filters: fromFilters.reducer,
  cart: fromCart.reducer,
  user: fromUser.reducer
};

export const getFiltersState = createFeatureSelector('filters');
export const getCartState = createFeatureSelector('cart');
export const getUserState = createFeatureSelector('user');
