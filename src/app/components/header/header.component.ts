import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('openClose', [
  //     state('open', style({ opacity: 1 })),
  //     state('void', style({ opacity: 0 })),
  //     transition('void <=> open', animate('300ms ease')),
  //   ]),
  // ],
})
export class HeaderComponent {
  isMobileMenuOpened: boolean = false;

  openCloseMobileMenu = () => {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
    const body = document.getElementsByTagName('body');
    const html = document.getElementsByTagName('html');
    if (this.isMobileMenuOpened) {
      body[0].style.overflowY = 'hidden';
      html[0].style.overflowY = 'hidden';
    }
    else {
      body[0].style.overflowY = 'auto'
      html[0].style.overflowY = 'auto';
    }
  }

  closeMobileMenu = () => {
    this.isMobileMenuOpened = false;
    const body = document.getElementsByTagName('body');
    const html = document.getElementsByTagName('html');
    body[0].style.overflowY = 'auto'
    html[0].style.overflowY = 'auto';
  }
}
