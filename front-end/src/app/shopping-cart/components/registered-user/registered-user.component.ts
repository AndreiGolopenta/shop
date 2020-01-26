import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.scss']
})
export class RegisteredUserComponent {

  @Input() userName: string;

  @Output() placeOrder = new EventEmitter();

  order() {
    this.placeOrder.emit();
  }

}
