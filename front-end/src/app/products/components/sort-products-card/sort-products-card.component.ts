import {
   Component,
   OnInit,
   Input,
   Output,
   EventEmitter,
   ViewChild,
   ElementRef,
   HostListener
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
   selector: 'app-sort-products-card',
   templateUrl: './sort-products-card.component.html',
   styleUrls: ['./sort-products-card.component.scss']
})
export class SortProductsCardComponent implements OnInit {
   sortByOptions: string[] = [
      'Popularity',
      'Price Ascending',
      'Price Descending'
   ];
   showList: boolean = false;

   form: FormGroup;

   @Input() selectionStock: number;
   @Input() stock: number;
   @Input() sortedBy: string;

   @Output() setSortBy = new EventEmitter<FormGroup>();

   @ViewChild('sortInput', { static: false }) sortInput: ElementRef;
   @ViewChild('icon', { static: false }) icon: ElementRef;

   @HostListener('window:click', ['$event'])
   sortList(event: MouseEvent) {
      switch (event.target) {
         case this.icon.nativeElement:
         case this.sortInput.nativeElement: {
            this.showList = !this.showList;
            return;
         }
         default: {
            this.showList = false;
            return;
         }
      }
   }

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
      this.form = this.fb.group({
         sort: [this.sortedBy]
      });
   }

   onSelect() {
      this.setSortBy.emit(this.form);
   }

   select(value: string) {
      this.form.get('sort').setValue(value);
      this.setSortBy.emit(this.form);
   }
}
