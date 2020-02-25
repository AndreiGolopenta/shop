import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Nav } from 'src/app/models/nav.interface';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
   expand: boolean = false;

   @Input() menu: boolean;

   @Output() responsiveNav = new EventEmitter();

   nav: Nav[] = [
      { name: 'Home', route: '/products', exact: true },
      { name: 'Shirts & Tops', route: '/products/shirts&tops', exact: false },
      { name: 'Shorts & Pants', route: '/products/shorts&pants', exact: false },
      {
         name: 'Jackets & Vests',
         route: '/products/jackets&vests',
         exact: false
      },
      { name: 'Shoes', route: '/products/shoes', exact: false },
      { name: 'Gloves', route: '/products/gloves', exact: false }
   ];

   userActions: Nav[] = [
      {
         name: 'Orders History',
         route: '/auth/user-account/orders-history',
         exact: false
      },
      {
         name: 'Change Password',
         route: '/auth/user-account/change-password',
         exact: false
      },
      {
         name: 'Edit Personal Data',
         route: '/auth/user-account/edit-personal-data',
         exact: false
      },
      {
         name: 'Delete Account',
         route: '/auth/user-account/delete-account',
         exact: false
      }
   ];

   closeResponsiveNav() {
      this.responsiveNav.emit();
   }

   expandMenu() {
      this.expand = !this.expand;
   }
}
