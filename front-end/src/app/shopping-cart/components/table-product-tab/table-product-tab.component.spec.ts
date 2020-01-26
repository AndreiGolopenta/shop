import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductTabComponent } from './table-product-tab.component';

describe('TableProductTabComponent', () => {
  let component: TableProductTabComponent;
  let fixture: ComponentFixture<TableProductTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProductTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProductTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
