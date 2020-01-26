import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromCart from '../reducers/cart.reducers';

export const getCart = createSelector(
  fromFeature.getCartState,
  fromCart.getCart
);

export const getCartTotal = createSelector(
  fromFeature.getCartState,
  fromCart.getCartTotal
);
