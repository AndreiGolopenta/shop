import { Component } from '@angular/core';

@Component({
  selector: 'app-jackets-vests',
  templateUrl: './jackets-vests.component.html',
  styleUrls: ['./jackets-vests.component.scss']
})
export class JacketsVestsComponent {
  productsDescription: string[] = [
    'name',
    'manufacturer',
    'version',
    'for',
    'fit'
  ];
  filters: string[] = [
    'manufacturer',
    'fit',
    'version',
    'for',
    'size'
  ];
  category: string = 'Jackets & Vests';
}
