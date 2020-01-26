import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductsFormComponent } from './filter-products-form.component';

describe('FilterProductsFormComponent', () => {
  let component: FilterProductsFormComponent;
  let fixture: ComponentFixture<FilterProductsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
