import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsTopsComponent } from './shirts-tops.component';

describe('ShirtsTopsComponent', () => {
  let component: ShirtsTopsComponent;
  let fixture: ComponentFixture<ShirtsTopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsTopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtsTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
