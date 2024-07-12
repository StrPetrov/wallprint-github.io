import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  // animations: [
  //   trigger('showHide', [
  //     state('open', style({ opacity: 1 })),
  //     state('void', style({ opacity: 0 })),
  //     transition('void <=> open', animate('1s ease')),
  //   ]),
  // ],
})
export class MaterialsComponent implements AfterViewInit {

  @ViewChild('brick') brick?: ElementRef
  @ViewChild('brickAfter') brickAfter?: ElementRef
  @ViewChild('wood') wood?: ElementRef
  @ViewChild('woodAfter') woodAfter?: ElementRef
  @ViewChild('woodWord') woodWord?: ElementRef
  @ViewChild('textureWall') textureWall?: ElementRef
  @ViewChild('textureWallAfter') textureWallAfter?: ElementRef
  @ViewChild('metal') metal?: ElementRef
  @ViewChild('metalAfter') metalAfter?: ElementRef
  @ViewChild('glass') glass?: ElementRef
  @ViewChild('glassAfter') glassAfter?: ElementRef
  @ViewChild('concrete') concrete?: ElementRef
  @ViewChild('concreteAfter') concreteAfter?: ElementRef

  // materialSelected = 'glass';

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.intersectionObserver(this.wood, this.woodAfter)
    this.intersectionObserver(this.brick, this.brickAfter)
    this.intersectionObserver(this.textureWall, this.textureWallAfter)
    this.intersectionObserver(this.glass, this.glassAfter)
    this.intersectionObserver(this.metal, this.metalAfter)
    this.intersectionObserver(this.concrete, this.concreteAfter)
  }

  intersectionObserver = (toObserve: any, toAnimate: any) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(toAnimate.nativeElement, 'opacity', '1')
          }
          else {
            this.renderer.setStyle(toAnimate.nativeElement, 'opacity', '0')
          }
        });
      },
      {
        root: null,
        threshold: 1
      }
    );

    observer.observe(toObserve.nativeElement);
  }

  // resetState = () => {
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '16.6%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '16.6%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '16.6%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '16.6%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '16.6%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '16.6%')
  // }

  // selectBrick = () => {
  //   this.materialSelected = 'brick'
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '12%')
  // }

  // selectWood = () => {
  //   this.materialSelected = 'wood'
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '12%')
  // }

  // selectTextureWall = () => {
  //   this.materialSelected = 'textureWall'
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '12%')
  // }

  // selectMetal = () => {
  //   this.materialSelected = 'metal'
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '12%')
  // }

  // selectGlass = () => {
  //   this.materialSelected = 'glass'
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '12%')
  // }

  // selectConcrete = () => {
  //   this.materialSelected = 'concrete'
  //   this.renderer.setStyle(this.concrete.nativeElement, 'width', '40%')
  //   this.renderer.setStyle(this.brick.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.wood.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.textureWall.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.metal.nativeElement, 'width', '12%')
  //   this.renderer.setStyle(this.glass.nativeElement, 'width', '12%')
  // }

}
