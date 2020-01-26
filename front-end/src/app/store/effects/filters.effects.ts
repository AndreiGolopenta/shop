import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as filtersActions from '../actions/filters.actions';
import { FiltersService } from '../../services/filters.service';
import { Filters } from '../../models/filters.interface';

@Injectable()
export class FiltersEffects {
  constructor(
    private actions$: Actions,
    private filtersService: FiltersService
  ) {}

  @Effect()
  loadFilters$ = this.actions$.pipe(ofType(filtersActions.LOAD_FILTERS)).pipe(
    map((action: filtersActions.LoadFilters) => action.payload),
    switchMap((data: { filters: string[]; category: string }) => {
      return this.filtersService.getFilters(data.filters, data.category).pipe(
        map((filters: Filters) => {
          return new filtersActions.LoadFiltersSuccess(filters);
        }),
        catchError(error => of(new filtersActions.LoadFiltersFail(error)))
      );
    })
  );
}
