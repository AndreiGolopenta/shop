import * as fromFilters from '../actions/filters.actions';
import { Filters, Category } from '../../models/filters.interface';

export interface FiltersState {
  filters: Filters;
  sortBy: string;
  category: string;
  productsDescription: string[];
}

export const initialState: FiltersState = {
  filters: undefined,
  sortBy: 'Popularity',
  category: '',
  productsDescription: []
};

export function reducer(
  state: FiltersState = initialState,
  action: fromFilters.filtersActions
) {
  switch (action.type) {
    case fromFilters.LOAD_ACTIVE_CATEGORY: {
      const category = action.payload;
      return {
        ...state,
        category
      }
    }
    
    case fromFilters.LOAD_PRODUCTS_DESCRIPTION: {
      const productsDescription = action.payload;
      return {
        ...state,
        productsDescription
      }
    }

    case fromFilters.LOAD_FILTERS: {
      return {
        ...state,
        filters: undefined
      };
    }

    case fromFilters.LOAD_FILTERS_FAIL: {
      return {
        ...state
      };
    }

    case fromFilters.LOAD_FILTERS_SUCCESS: {
      const filters = action.payload;
      return {
        ...state,
        filters
      };
    }

    case fromFilters.UPDATE_FILTERS: {
      const newFilters = action.payload;
      return {
        ...state,
        filters: { ...state.filters, ...newFilters }
      };
    }

    case fromFilters.RESET_FILTERS: {
      const resetedFilters = { ...state.filters };
      for (let prop in resetedFilters) {
        const values = resetedFilters[prop].map((value: Category) => {
          return { name: value.name, checked: false };
        });
        resetedFilters[prop] = values;
      }
      return {
        ...state,
        filters: resetedFilters
      };
    }

    case fromFilters.SET_SORT_BY: {
      const newSort = action.payload;
      return {
        ...state,
        sortBy: newSort
      }
    }

    default: {
      return state;
    }
  }
}
