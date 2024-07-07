import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {

  @ViewChild('galleryButton') galleryButton!: ElementRef
  @ViewChild('firstGalleryImage') firstImage!: ElementRef
  @ViewChild('secondGalleryImage') secondImage!: ElementRef
  @ViewChild('thirdGalleryImage') thirdImage!: ElementRef
  @ViewChild('forthGalleryImage') forthImage!: ElementRef
  @ViewChild('fifthGalleryImage') fifthImage!: ElementRef
  @ViewChild('sixthGalleryImage') sixthImage!: ElementRef

  isGalleryModalOpened = false;
  galleryButtonInterval: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.intersectionObserver(this.firstImage, 'slide-left');
    this.intersectionObserver(this.secondImage, 'slide-right');
    this.intersectionObserver(this.thirdImage, 'slide-left');
    this.intersectionObserver(this.forthImage, 'slide-right');
    this.intersectionObserver(this.fifthImage, 'slide-left');
    this.intersectionObserver(this.sixthImage, 'slide-right');

    this.galleryButtonInterval = setInterval(() => {
      this.renderer.addClass(this.galleryButton.nativeElement, 'shake');

      setTimeout(() => {
        this.renderer.removeClass(this.galleryButton.nativeElement, 'shake');
      }, 700)
    }, 2700)
  }

  intersectionObserver = (elementRef: ElementRef, className: string) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(elementRef.nativeElement, className)
          }
        });
      },
      {
        root: null,
        threshold: 0
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
