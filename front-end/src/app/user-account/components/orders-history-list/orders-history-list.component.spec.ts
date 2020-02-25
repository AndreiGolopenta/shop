import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryListComponent } from './orders-history-list.component';

describe('OrdersHistoryListComponent', () => {
  let component: OrdersHistoryListComponent;
  let fixture: ComponentFixture<OrdersHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
