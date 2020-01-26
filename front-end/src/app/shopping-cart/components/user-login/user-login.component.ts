import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserLogIn } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  @Input() userName: string;
  @Input() color: string;
  @Input() errorMessage: string;

  @Output() userLogin = new EventEmitter<UserLogIn>();
  @Output() placeOrder = new EventEmitter();

  handleLogin(data: UserLogIn) {
    this.userLogin.emit(data);
  }

  handlePlaceOrder() {
    this.placeOrder.emit();
  }

}
