import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  borderLeftValue: string;

  @Input() color: string;

  ngOnInit() {
    this.borderLeftValue = `10px solid ${this.color}`;
  }
}
