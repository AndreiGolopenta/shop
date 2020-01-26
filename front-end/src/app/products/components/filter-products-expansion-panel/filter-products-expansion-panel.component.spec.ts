import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductsExpansionPanelComponent } from './filter-products-expansion-panel.component';

describe('FilterProductsExpansionPanelComponent', () => {
  let component: FilterProductsExpansionPanelComponent;
  let fixture: ComponentFixture<FilterProductsExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductsExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductsExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
