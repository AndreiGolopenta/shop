import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { cartAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss'],
  animations: [cartAnimation]
})
export class CartInfoComponent implements OnChanges {

  cartAnimation: boolean = false;

  @Input() cartTotal: number;
  @Input() cartQuantity: number;
  @Input() userToken: string;

  @Output() navigateToCart = new EventEmitter();
  @Output() navigateToUserProfile = new EventEmitter();
  @Output() navigateToLogIn = new EventEmitter();
  @Output() userLogout = new EventEmitter();

  ngOnChanges() {
    if (this.cartQuantity > 0) {
      this.cartAnimation = !this.cartAnimation;
    }
  }

  viewCart() {
    this.navigateToCart.emit();
  }

  userAccount() {
    this.navigateToUserProfile.emit();
  }

  logIn() {
    this.navigateToLogIn.emit();
  }

  logoutAction() {
    this.userLogout.emit();
  }
}
