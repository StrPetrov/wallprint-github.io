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

  constructor(private sharedService: SharedService, private renderer: Renderer2) {}

  subscription!: Subscription

  ngAfterViewInit(): void {
    this.subscription = this.sharedService.scrolledDownSubject.subscribe(() => {
      this.aboutUs.nativeElement.scrollIntoView({behaviour: 'smooth', block: 'start' })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(this.imgToAnimate.nativeElement, 'top', '-85px')
          }
        });
      },
      {
        root: null,
        threshold: 0.8
      }
    );

    observer.observe(this.imgToAnimate.nativeElement);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
