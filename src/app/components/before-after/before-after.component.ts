import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent {

  constructor(private renderer: Renderer2) {}

  compareImages = (event: Event, before: HTMLElement, dragLine: HTMLElement) => {
    let inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    this.renderer.setStyle(dragLine, 'left', `${inputValue}%`)

    this.renderer.setStyle(before,
      'clipPath',
      `polygon(0 0, ${inputValue}% 0, ${inputValue}% 100%, 0 100%)`)
  }
}
