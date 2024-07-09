import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit, OnDestroy {
 @ViewChild('pricingTextWrapper') textWrapper!: ElementRef;
 @ViewChild('pricingText') text!: ElementRef
 @ViewChild('pricing') pricing!: ElementRef
 @ViewChild('calculator') calculator!: ElementRef
 subscription!: Subscription

 constructor(private renderer: Renderer2, private sharedService: SharedService) {}

 ngAfterViewInit(): void {

  this.subscription = this.sharedService.scrolledDownPricingSubject.subscribe(() => {
    this.pricing.nativeElement.scrollIntoView({behaviour: 'smooth', block: 'start'})
  })

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

 ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }

 scrollToCalculator = () => {
  this.calculator.nativeElement.scrollIntoView({ behaviour: 'smooth', block: 'start' })
 }
}
