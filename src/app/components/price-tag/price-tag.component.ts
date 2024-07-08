import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent {
 @Input() priceName!: string;
 @Input() priceValue!: string;
 @Input() printingSurficeFrom!: string;
 @Input() printingSurficeTo!: string;

 @ViewChild('overlayAnimation') overlayAnimation!: ElementRef;
 @ViewChild('priceTag') priceTag!: ElementRef;

 constructor(private renderer: Renderer2) {}

 triggerAnimation = () => {
  this.renderer.addClass(this.overlayAnimation.nativeElement, 'animate-background');
  this.renderer.addClass(this.priceTag.nativeElement, 'animate-price-tag');

  setTimeout(() => {
    this.renderer.removeClass(this.overlayAnimation.nativeElement, 'animate-background');
    this.renderer.removeClass(this.priceTag.nativeElement, 'animate-price-tag');
  }, 500)
 }
}
