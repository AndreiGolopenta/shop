import { Action } from '@ngrx/store';
import { ProductFromCart } from '../../models/productFromCart.interface';

export const ADD_TO_CART = '[product] Add To Cart';
export const REMOVE_FROM_CART = '[shooping-cart] Remove From Cart';
export const EMPTY_CART = '[shooping-cart] Empty Cart';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: ProductFromCart) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public payload: ProductFromCart) {}
}

export class EmptyCart implements Action {
  readonly type = EMPTY_CART;
}

export type cartActions = AddToCart | RemoveFromCart | EmptyCart;
