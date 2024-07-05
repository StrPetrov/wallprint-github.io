import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  @ViewChild('galleryImage') galleryImageEl!: ElementRef

  imagePaths: string[] = ['assets/images/gallery1.png', 'assets/images/gallery2.png', 'assets/images/gallery3.png', 'assets/images/gallery4.png']

  @Output() closedModal = new EventEmitter<void>()

  swiperConfig = {
    pagination: true,
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  closeModal = (event: Event) => {
    let clickedElement = event.target as HTMLDivElement;

    if (!this.galleryImageEl.nativeElement.contains(clickedElement)) {
      this.closedModal.emit();
    }
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
}
