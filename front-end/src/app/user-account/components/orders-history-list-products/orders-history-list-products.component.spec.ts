import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryListProductsComponent } from './orders-history-list-products.component';

describe('OrdersHistoryListProductsComponent', () => {
  let component: OrdersHistoryListProductsComponent;
  let fixture: ComponentFixture<OrdersHistoryListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHistoryListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHistoryListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
