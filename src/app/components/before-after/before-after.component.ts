import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements AfterViewInit {

  @ViewChild('aboutUsText') text!: ElementRef
  @ViewChild('aboutUsTextWrapper') textWrapper!: ElementRef

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.text.nativeElement, 'animate')
          }
        });
      },
      {
        root: null,
        threshold: 0.25
      }
    );

    textObserver.observe(this.textWrapper.nativeElement)
  }

  compareImages = (event: Event, before: HTMLElement, dragLine: HTMLElement) => {
    let inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    this.renderer.setStyle(dragLine, 'left', `${inputValue}%`)

    this.renderer.setStyle(before,
      'clipPath',
      `polygon(0 0, ${inputValue}% 0, ${inputValue}% 100%, 0 100%)`)
  }
}
