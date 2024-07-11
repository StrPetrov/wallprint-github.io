import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  scrolledDownAboutUsSubject = new Subject<void>();
  scrolledDownGallerySubject = new Subject<void>();
  scrolledDownPricingSubject = new Subject<void>();
  scrolledDownFormSubject = new Subject<void>();

  
  sendMail = (data: any) => {
    return this.http.post('http://localhost:8000/mail-sender.php', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
