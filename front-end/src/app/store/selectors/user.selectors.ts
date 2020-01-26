import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducers';

export const getUserToken = createSelector(
  fromFeature.getUserState,
  fromUser.getToken
);

export const getUserName = createSelector(
  fromFeature.getUserState,
  fromUser.getUserName
)