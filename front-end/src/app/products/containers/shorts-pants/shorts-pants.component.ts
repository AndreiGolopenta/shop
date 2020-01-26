import { Component } from '@angular/core';

@Component({
  selector: 'app-shorts-pants',
  templateUrl: './shorts-pants.component.html',
  styleUrls: ['./shorts-pants.component.scss']
})
export class ShortsPantsComponent {
  productsDescription: string[] = [
    'name',
    'manufacturer',
    'version',
    'for',
    'length'
  ];
  filters: string[] = ['manufacturer', 'length', 'version', 'for', 'size'];
  category: string = 'Shorts & Pants';
}
