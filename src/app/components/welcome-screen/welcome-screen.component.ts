import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  constructor(private sharedService: SharedService) {}

  scrollDown = () => {
    this.sharedService.scrolledDownSubject.next();
  }

}
