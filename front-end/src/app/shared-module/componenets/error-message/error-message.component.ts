import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnChanges {
  borderLeftValue: string;
  text: string;

  @Input() color: string;

  ngOnChanges() {
    this.borderLeftValue = `10px solid ${this.color}`;

    switch (this.color) {
      case '#B00020': {
        return this.text = 'Error:';
      }
      default: {
        return this.text = 'Please note:';
      }
    }
  }
}
