import {
   Component,
   Input,
   Output,
   EventEmitter,
   ViewChild,
   ElementRef,
   HostListener,
   AfterViewInit,
   AfterContentInit,
   OnInit
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductFromCart } from '../../../models/productFromCart.interface';
import { Product } from '../../../models/product.interface';

@Component({
   selector: 'app-product-detail-order',
   templateUrl: './product-detail-order.component.html',
   styleUrls: ['./product-detail-order.component.scss']
})
export class ProductDetailOrderComponent {
   showList: boolean = false;

   @Input() product: Product;

   @Output() orderProduct = new EventEmitter<ProductFromCart>();

   @ViewChild('input', { static: false }) input: ElementRef;
   @ViewChild('iconOrder', { static: false }) icon: ElementRef;

   @HostListener('window:click', ['$event'])
   manageList(event: MouseEvent) {
      switch (event.target) {
         case this.icon.nativeElement:
         case this.input.nativeElement: {
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

   form: FormGroup = this.fb.group({
      size: ['', Validators.required],
      quantity: [1, Validators.min(1)]
   });

   onSubmit() {
      const { size } = this.form.value;
      const id = `${this.product._id}${size}`;
      const order: ProductFromCart = {
         [id]: {
            product: this.product,
            ...this.form.value
         }
      };
      this.orderProduct.emit(order);
      this.form.get('quantity').reset(1);
   }

   get error() {
      return (
         this.form.get('size').hasError('required') &&
         this.form.get('size').touched
      );
   }

   selectSize(value: string) {
      this.form.get('size').setValue(value);
   }
}
