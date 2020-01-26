import { Component } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent {
  productsDescription: string[] = [
    'name',
    'manufacturer',
    'material',
    'for',
    'purpose'
  ];
  filters: string[] = [
    'manufacturer',
    'purpose',
    'version',
    'for',
    'material',
    'size'
  ];
  category: string = 'Shoes';
}
