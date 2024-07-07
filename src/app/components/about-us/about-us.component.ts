import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
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

  constructor(private sharedService: SharedService, private renderer: Renderer2) {}

  subscription!: Subscription

  ngAfterViewInit(): void {
    this.subscription = this.sharedService.scrolledDownSubject.subscribe(() => {
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
        threshold: 0.4
      }
    );

    textObserver.observe(this.aboutUs.nativeElement)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
