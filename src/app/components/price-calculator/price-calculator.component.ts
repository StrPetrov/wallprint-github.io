import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent{

  private _inputRangeValue: number = 0
  result: string | number | null = '0.00';
  showMax = false;

  @ViewChild('rangeInput') rangeInput!: ElementRef

  constructor(private sharedService: SharedService) {}

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

  scrollToForm = () => {
    this.sharedService.scrolledDownFormSubject.next();
  }

  validateInput = (event: any) => {
    let el = event.target;
    let value = el.value;

    const regex = /^(?:0|[1-9]\d?)(?:\.\d{0,2})?$/;
    const tempValue = parseFloat(value);

    if (value.length > 1 && value[0] === '0' && /^[1-9]$/.test(value[1])) {
      value = value.substring(1);
      el.value = value;
  }
    
    if (!regex.test(value) || tempValue > 25) {
      el.value = value.slice(0, -1);
    }

    if (tempValue > 25) {
      this.showMax = true;
    }
    else {
      this.showMax = false;
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
      if (value > 25) {
        return
      }
      this._inputRangeValue = this.stripDecimals(value, 2)
     }
  }

  stripDecimals = (value: number, decimals: number) => {
    const strValue = value.toString();
    const decimalIndex = strValue.indexOf('.');
  
    if (decimalIndex === -1) {
    // No decimal point found, return the original value
    return value;
    }
  
    const strippedValue = strValue.slice(0, decimalIndex + decimals + 1);
    return +strippedValue;
  }

  onFocus = (event: any) => {
    let el = event.target;
    el.value = '';
  }
}
