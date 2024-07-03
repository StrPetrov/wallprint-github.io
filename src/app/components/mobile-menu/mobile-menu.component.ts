import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements AfterViewInit {
  @ViewChild('option1') option1!: ElementRef
  @ViewChild('option2') option2!: ElementRef
  @ViewChild('option3') option3!: ElementRef
  @ViewChild('option4') option4!: ElementRef
  @ViewChild('option5') option5!: ElementRef
  @ViewChild('option6') option6!: ElementRef
  @ViewChild('footer') footer!: ElementRef

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
      this.renderer.addClass(this.option1.nativeElement, 'slide-up-1');
      this.renderer.addClass(this.option2.nativeElement, 'slide-up-2');
      this.renderer.addClass(this.option3.nativeElement, 'slide-up-3');
      this.renderer.addClass(this.option4.nativeElement, 'slide-up-4');
      this.renderer.addClass(this.footer.nativeElement, 'slide-up-footer');
  }
}
