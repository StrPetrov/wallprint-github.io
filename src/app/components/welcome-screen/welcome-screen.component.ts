import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements AfterViewInit {

  @ViewChild('pointerCircle') pointerCircle!: ElementRef
  @ViewChild('mousePointerArea') mousePointerArea!: ElementRef
  @ViewChild('header') header!: ElementRef
  @ViewChild('icons') icons!: ElementRef
  @ViewChild('contact') contact!: ElementRef
  @ViewChild('line') line!: ElementRef
  @ViewChild('title') title!: ElementRef

  mouse = { x: 0, y: 0 }
  circle = { x: 0, y: 0 }
  previousMouse = { x: 0, y: 0 }
  speed = 0.17
  currentScale = 0
  currentAngle = 0

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.mousePointerArea.nativeElement.getBoundingClientRect();

    if (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    ) {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
      
      this.renderer.setStyle(this.pointerCircle.nativeElement, 'visibility', 'visible')
    } else {
      this.renderer.setStyle(this.pointerCircle.nativeElement, 'visibility', 'hidden')
    }
  }

  constructor(private sharedService: SharedService, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.tick();
  }

  scrollDown = () => {
    this.sharedService.scrolledDownAboutUsSubject.next();
  }

  tick = () => {
    this.circle.x += (this.mouse.x - this.circle.x) * this.speed
    this.circle.y += (this.mouse.y - this.circle.y) * this.speed

    const translateTransform = `translate(${this.circle.x}px, ${this.circle.y}px)`

    const deltaMouseX = this.mouse.x - this.previousMouse.x
    const deltaMouseY = this.mouse.y - this.previousMouse.y
    
    this.previousMouse.x = this.mouse.x
    this.previousMouse.y = this.mouse.y

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150)
    const scaleValue = (mouseVelocity / 150) * 0.5

    this.currentScale += (scaleValue - this.currentScale) * this.speed

    const scaleTransform = `scale(${1 + this.currentScale}, ${1 - this.currentScale})`

    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI

    if (mouseVelocity > 20) {
      this.currentAngle = angle
    }

    const rotateTransform = `rotate(${this.currentAngle}deg)`

    this.pointerCircle.nativeElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`

    window.requestAnimationFrame(this.tick)
  }

  triggerAnimation = () => {
    this.renderer.addClass(this.mousePointerArea.nativeElement, 'animate-video')
    
    setTimeout(() => {
      this.renderer.setStyle(this.header.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.icons.nativeElement, 'transform', 'translateX(0%)')
      this.renderer.setStyle(this.contact.nativeElement, 'transform', 'translateX(0%)')
    }, 500)

    setTimeout(() => {
      this.renderer.setStyle(this.line.nativeElement, 'opacity', '1');
    }, 1000)

    setTimeout(() => {
      this.renderer.addClass(this.title.nativeElement, 'animate-title');
    }, 1250)
  }
}
