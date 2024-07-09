import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalculatorComponent } from './price-calculator.component';

describe('PriceCalculatorComponent', () => {
  let component: PriceCalculatorComponent;
  let fixture: ComponentFixture<PriceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCalculatorComponent]
    });
    fixture = TestBed.createComponent(PriceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
