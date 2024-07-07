import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
 @ViewChild('pricingTextWrapper') textWrapper!: ElementRef;
 @ViewChild('pricingText') text!: ElementRef

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
      threshold: 0.4
    }
  );

  textObserver.observe(this.textWrapper.nativeElement)
 }
}
