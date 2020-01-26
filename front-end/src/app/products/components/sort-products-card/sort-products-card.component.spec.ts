import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProductsCardComponent } from './sort-products-card.component';

describe('SortProductsCardComponent', () => {
  let component: SortProductsCardComponent;
  let fixture: ComponentFixture<SortProductsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortProductsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
