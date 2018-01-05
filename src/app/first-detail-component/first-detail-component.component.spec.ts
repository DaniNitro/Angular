import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDetailComponentComponent } from './first-detail-component.component';

describe('FirstDetailComponentComponent', () => {
  let component: FirstDetailComponentComponent;
  let fixture: ComponentFixture<FirstDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
