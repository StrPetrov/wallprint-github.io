import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit, OnInit {

  @ViewChild('second') secondImage!: ElementRef
  @ViewChild('third') thirdImage!: ElementRef
  @ViewChild('galleryButton') galleryButton!: ElementRef

  partners = ['logo', 'render', 'skype', 'music', 'iphone', 'adidas', 'nike', 'rosa', 'logitech', 'frikom', 'ikea', 'lidl']
  partnersToDisplay: string[] = [];
  currentIndex = 0;
  isGalleryModalOpened = false;
  galleryButtonInterval: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updatePartnersToDisplay()

    setInterval(() => {
      this.updatePartnersToDisplay();
    }, 8000)
  }

  updatePartnersToDisplay(): void {
    this.partnersToDisplay = [];
    for (let i = 0; i < 4; i++) {
      this.partnersToDisplay.push(this.partners[(this.currentIndex + i) % this.partners.length]);
    }
    this.currentIndex = (this.currentIndex + 4) % this.partners.length;
  }

  ngAfterViewInit(): void {
    this.intersectionObserver(this.secondImage, 0.4, '0.85', '0.6');
    this.intersectionObserver(this.thirdImage, 0.7, '0.9', '0.5' );

    this.galleryButtonInterval = setInterval(() => {
      this.renderer.addClass(this.galleryButton.nativeElement, 'shake');

      setTimeout(() => {
        this.renderer.removeClass(this.galleryButton.nativeElement, 'shake');
      }, 700)
    }, 2700)
  }

  intersectionObserver = (elementRef: ElementRef, threshold: number, scaleUp: string, scaleDown: string) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(elementRef.nativeElement, 'scale', scaleUp)
          }
        });
      },
      {
        root: null,
        threshold: threshold
      }
    );

    observer.observe(elementRef.nativeElement);
  }

  openGalleryModal = () => {
    this.isGalleryModalOpened = true;
    clearInterval(this.galleryButtonInterval);
    this.renderer.removeClass(this.galleryButton.nativeElement, 'shake');

    const body = document.getElementsByTagName('body');
    const html = document.getElementsByTagName('html');
    body[0].style.overflowY = 'hidden';
    html[0].style.overflowY = 'hidden';
  }

  closeGalleryModal = () => {
    this.isGalleryModalOpened = false;
    const body = document.getElementsByTagName('body');
    const html = document.getElementsByTagName('html');
    body[0].style.overflowY = 'auto'
    html[0].style.overflowY = 'auto';
  }
}
