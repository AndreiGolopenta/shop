import { Component } from '@angular/core';

@Component({
  selector: 'app-gloves',
  templateUrl: './gloves.component.html',
  styleUrls: ['./gloves.component.scss']
})
export class GlovesComponent {
  productsDescription: string[] = [
    'name',
    'manufacturer',
    'material',
    'for',
    'version'
  ];
  filters: string[] = [
    'manufacturer',
    'version',
    'for',
    'material',
    'size'
  ];
  category: string = 'Gloves';

}
