import * as fromCart from '../actions/cart.actions';
import { ProductFromCart, TableData } from '../../models/productFromCart.interface';

export interface CartState {
  cart: ProductFromCart;
  cartTotal: number;
}

export const initialState: CartState = {
  cart: {},
  cartTotal: 0
};

function totalPrice(cart: ProductFromCart): number {
  const result = Object.values(cart).reduce((prev, next: TableData) => {
    const nextValue = (next.quantity * next.product.price * 100);
    return (prev * 100 + nextValue) / 100;
  }, 0);
  return parseFloat(result.toFixed(2));
}

export function reducer(
  state: CartState = initialState,
  action: fromCart.cartActions
) {
  switch (action.type) {
    case fromCart.ADD_TO_CART: {
      const product = action.payload;
      const newCart = { ...state.cart, ...product };
      const cartTotal = totalPrice(newCart);
      return {
        ...state,
        cart: newCart,
        cartTotal
      };
    }

    case fromCart.REMOVE_FROM_CART: {
      const product = action.payload;
      const id = Object.keys(product)[0];
      const { [id]: deleted, ...rest  } = state.cart;
      const cartTotal = totalPrice(rest);
      return {
        ...state,
        cart: rest,
        cartTotal
      }
    }

    case fromCart.EMPTY_CART: {
      const emptyCart = {};
      const cartTotal = 0;
      return {
        ...state,
        cart: emptyCart,
        cartTotal
      }
    }

    default: {
      return state;
    }
  }
}

export const getCart = (state: CartState) => state.cart;
export const getCartTotal = (state: CartState) => state.cartTotal;
