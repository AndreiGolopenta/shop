import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserLogIn } from 'src/app/models/user.interface';

@Component({
  selector: 'app-unregistered-user',
  templateUrl: './unregistered-user.component.html',
  styleUrls: ['./unregistered-user.component.scss']
})
export class UnregisteredUserComponent implements OnInit {
  
  @Output() userLogin = new EventEmitter<UserLogIn>();

  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  ngOnInit() {}

  handleSubmit() {
    this.userLogin.emit(this.form.value);
  }
}
