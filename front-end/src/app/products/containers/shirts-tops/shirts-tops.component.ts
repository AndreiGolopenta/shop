import { Component } from '@angular/core';

@Component({
  selector: 'app-shirts-tops',
  templateUrl: './shirts-tops.component.html',
  styleUrls: ['./shirts-tops.component.scss']
})
export class ShirtsTopsComponent {
  filters: string[] = ['manufacturer', 'season', 'for', 'material', 'size'];
  category: string = 'Shirts & Tops';
  productsDescription: string[] = [
    'name',
    'manufacturer',
    'material',
    'for',
    'season'
  ];
}
