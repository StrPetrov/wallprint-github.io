import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements AfterViewInit {

  @ViewChild('aboutUsText') text!: ElementRef
  @ViewChild('aboutUsTextWrapper') textWrapper!: ElementRef
  @ViewChild('after1') after1!: ElementRef
  @ViewChild('before1') before1!: ElementRef

  isComparisonStarted: boolean = false;

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

    this.isComparisonStarted = true;
    this.renderer.setStyle(this.after1.nativeElement, 'filter', 'none')
    this.renderer.setStyle(this.before1.nativeElement, 'filter', 'none')

    this.renderer.setStyle(dragLine, 'left', `${inputValue}%`)

    this.renderer.setStyle(before,
      'clipPath',
      `polygon(0 0, ${inputValue}% 0, ${inputValue}% 100%, 0 100%)`)
  }
}
