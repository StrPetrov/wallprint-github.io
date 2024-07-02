import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
        })
      ),
      transition('void => open', [
        style({
          opacity: 0
        }),
        animate(300, style({ opacity: 1}))
      ]),
      transition('open => void', [animate(300, style({opacity: 0}))])
    ]),
  ],
})
export class HeaderComponent {
  isMobileMenuOpened: boolean = false;

  openCloseMobileMenu = () => {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
    const body = document.getElementsByTagName('body');
    if (this.isMobileMenuOpened) {
      body[0].style.overflow = 'hidden';
    }
    else {
      body[0].style.overflow = 'auto'
    }
  }
}
