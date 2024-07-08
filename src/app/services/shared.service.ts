import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  scrolledDownAboutUsSubject = new Subject<void>();
  scrolledDownGallerySubject = new Subject<void>();

  constructor() { }

}
