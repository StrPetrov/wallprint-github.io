import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('aboutUs') aboutUs!: ElementRef
  @ViewChild('animate') imgToAnimate!: ElementRef
  @ViewChild('h2') h2!: ElementRef
  @ViewChild('p') p!: ElementRef
  @ViewChild('contactButton') contactButton!: ElementRef
  @ViewChild('aboutUsDesktop') aboutUsDesktop!: ElementRef
  @ViewChild('machine') machine!: ElementRef
  @ViewChild('aurora2') aurora2!: ElementRef
  @ViewChild('aurora3') aurora3!: ElementRef

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the percentage of scroll
    const scrollPercent = scrollTop / maxScroll;

    // Move the image up based on scroll percent
    const moveDistance = -scrollPercent * 400; // Adjust multiplier as needed
    this.imgToAnimate.nativeElement.style.transform = `translateY(${moveDistance}%)`;
  }

  constructor(private sharedService: SharedService, private renderer: Renderer2) {}

  subscription!: Subscription

  ngAfterViewInit(): void {
    this.subscription = this.sharedService.scrolledDownAboutUsSubject.subscribe(() => {
      this.aboutUs.nativeElement.scrollIntoView({behaviour: 'smooth', block: 'start' })
    })

    // const imageObserver = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         this.renderer.setStyle(this.imgToAnimate.nativeElement, 'top', '-85px')
    //       }
    //     });
    //   },
    //   {
    //     root: null,
    //     threshold: 0.3
    //   }
    // );

    // imageObserver.observe(this.imgToAnimate.nativeElement);

    const aboutUsDesktopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(this.machine.nativeElement, 'transform', 'translateY(0%)')
          }
        });
      },
      {
        root: null,
        threshold: 0.8
      }
    );

    aboutUsDesktopObserver.observe(this.aboutUsDesktop.nativeElement)

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.h2.nativeElement, 'animate')
            this.renderer.addClass(this.p.nativeElement, 'animate')
          }
        });
      },
      {
        root: null,
        threshold: 0.25
      }
    );

    textObserver.observe(this.aboutUs.nativeElement)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  scrollToForm = () => {
    this.renderer.addClass(this.contactButton.nativeElement, 'animate-button')

    setTimeout(() => {
      this.sharedService.scrolledDownFormSubject.next()
      this.renderer.removeClass(this.contactButton.nativeElement, 'animate-button')
    }, 200)
  }
}
