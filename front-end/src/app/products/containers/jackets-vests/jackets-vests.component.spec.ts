import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketsVestsComponent } from './jackets-vests.component';

describe('JacketsVestsComponent', () => {
  let component: JacketsVestsComponent;
  let fixture: ComponentFixture<JacketsVestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketsVestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketsVestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
