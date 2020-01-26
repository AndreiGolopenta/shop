import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    search: ['']
  });

  ngOnInit() {}
}
