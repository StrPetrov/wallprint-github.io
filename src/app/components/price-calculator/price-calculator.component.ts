import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent{

  private _inputRangeValue: number = 0
  result: string | number | null = '0.00';

  @ViewChild('rangeInput') rangeInput!: ElementRef

  onInput = () => {
    let value: string;
    
    if (!this.inputRangeValue) {
      value = '0%'
    }
    else {
      value = `${+this.inputRangeValue * 4}%`
    }

    this.rangeInput.nativeElement.style.setProperty('--value', value);
    this.calculate();
  }

  calculate = () => {
    if (this._inputRangeValue >= 0 && this._inputRangeValue <= 5) {
      this.result = (this._inputRangeValue * 100).toFixed(2)
    }
    else if (this._inputRangeValue > 5 && this._inputRangeValue <= 10) {
      this.result = (this._inputRangeValue * 200).toFixed(2)
    }
    else if (this._inputRangeValue > 10 && this._inputRangeValue <= 25) {
      this.result = (this._inputRangeValue * 300).toFixed(2)
    }
  }

  get inputRangeValue(): number {
    return this._inputRangeValue;
  }

  set inputRangeValue(value: number) {
    if (value === null) {
      this._inputRangeValue = 0; 
    } 
    else {
      this._inputRangeValue = value
     }
  }
}
