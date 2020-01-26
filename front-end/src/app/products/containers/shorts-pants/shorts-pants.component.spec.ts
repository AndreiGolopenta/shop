import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsPantsComponent } from './shorts-pants.component';

describe('ShortsPantsComponent', () => {
  let component: ShortsPantsComponent;
  let fixture: ComponentFixture<ShortsPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortsPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortsPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
