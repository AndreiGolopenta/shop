import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.StoreState>,
    private router: Router
  ) {}

  canActivate() {
    return this.store.select(fromStore.getUserToken).pipe(
      map((token: string) => {
        if (!token) {
          this.router.navigate(['/auth/sign-in']);
        }
        return !!token;
      })
    );
  }
}
