import { Action } from '@ngrx/store';
import { Filters } from '../../models/filters.interface';

export const LOAD_ACTIVE_CATEGORY = '[products] Load Active Category';
export const LOAD_PRODUCTS_DESCRIPTION = '[products] Load Products Description';
export const LOAD_FILTERS = '[products] Load Filters';
export const LOAD_FILTERS_FAIL = '[products] Load Filters Fail';
export const LOAD_FILTERS_SUCCESS = '[products] Load Filters Success';
export const UPDATE_FILTERS = '[products] Update Filters';
export const RESET_FILTERS = '[products] Reset Filters';
export const SET_SORT_BY = '[products] Set Sort By';

export class LoadActiveCategory implements Action {
  readonly type = LOAD_ACTIVE_CATEGORY;
  constructor(public payload: string) {}
}

export class LoadProductsDescription implements Action {
  readonly type = LOAD_PRODUCTS_DESCRIPTION;
  constructor(public payload: string[]) {}
}

export class LoadFilters implements Action {
  readonly type = LOAD_FILTERS;
  constructor(public payload: { filters: string[]; category: string }) {}
}

export class LoadFiltersFail implements Action {
  readonly type = LOAD_FILTERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadFiltersSuccess implements Action {
  readonly type = LOAD_FILTERS_SUCCESS;
  constructor(public payload: Filters) {}
}

export class UpdateFilters implements Action {
  readonly type = UPDATE_FILTERS;
  constructor(public payload: Filters) {}
}

export class ResetFilters implements Action {
  readonly type = RESET_FILTERS;
}

export class SetSortBy implements Action {
  readonly type = SET_SORT_BY;
  constructor(public payload: string) {}
}

export type filtersActions =
  | LoadActiveCategory
  | LoadProductsDescription
  | LoadFilters
  | LoadFiltersFail
  | LoadFiltersSuccess
  | UpdateFilters
  | ResetFilters
  | SetSortBy;
