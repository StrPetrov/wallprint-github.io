import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('option1') option1!: ElementRef;
  @ViewChild('option2') option2!: ElementRef;
  @ViewChild('option3') option3!: ElementRef;
  @ViewChild('option4') option4!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;
  
  @Output('closedMobileMenu') closedMobileMenu = new EventEmitter<void>()

  constructor(private renderer: Renderer2, private elRef: ElementRef, private sharedService: SharedService) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.option1.nativeElement, 'slide-up-1');
    this.renderer.addClass(this.option2.nativeElement, 'slide-up-2');
    this.renderer.addClass(this.option3.nativeElement, 'slide-up-3');
    this.renderer.addClass(this.option4.nativeElement, 'slide-up-4');
    this.renderer.addClass(this.footer.nativeElement, 'slide-up-footer');
  }

  ngOnInit() {
    this.disableTouchActions();
  }

  ngOnDestroy() {
    this.enableTouchActions();
  }

  private disableTouchActions = () => {
    const overlayElement = this.elRef.nativeElement;

    overlayElement.addEventListener('touchstart', this.preventMultiTouch, { passive: false });
    overlayElement.addEventListener('gesturestart', this.preventGesture, { passive: false });
    overlayElement.addEventListener('gesturechange', this.preventGesture, { passive: false });
    overlayElement.addEventListener('gestureend', this.preventGesture, { passive: false });
    overlayElement.addEventListener('touchend', this.preventDoubleTapZoom, { passive: false });
  }

  private enableTouchActions = () => {
    const overlayElement = this.elRef.nativeElement;

    overlayElement.removeEventListener('touchstart', this.preventMultiTouch);
    overlayElement.removeEventListener('gesturestart', this.preventGesture);
    overlayElement.removeEventListener('gesturechange', this.preventGesture);
    overlayElement.removeEventListener('gestureend', this.preventGesture);
    overlayElement.removeEventListener('touchend', this.preventDoubleTapZoom);
  }

  private preventMultiTouch = (event: TouchEvent) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }

  private preventGesture = (event: Event) => {
    event.preventDefault();
  }

  private lastTouchEnd = 0;

  private preventDoubleTapZoom = (event: TouchEvent) => {
    const now = (new Date()).getTime();
    if (now - this.lastTouchEnd <= 300) {
      event.preventDefault();
    }
    this.lastTouchEnd = now;
  };

  scrollToAboutUs = () => {
    this.closedMobileMenu.emit();
    setTimeout(() => {
      this.sharedService.scrolledDownAboutUsSubject.next()
    }, 300)
  }

  scrollToGallery = () => {
    this.closedMobileMenu.emit();
    setTimeout(() => {
      this.sharedService.scrolledDownGallerySubject.next()
    }, 300)
  }

  scrollToPricing = () => {
    this.closedMobileMenu.emit();
    setTimeout(() => {
      this.sharedService.scrolledDownPricingSubject.next()
    }, 300)
  }

  scrollToForm = () => {
    this.closedMobileMenu.emit();
    setTimeout(() => {
      this.sharedService.scrolledDownFormSubject.next()
    }, 300)
  }
}
