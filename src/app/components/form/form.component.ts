import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  isMailSending = false;
  isMailSent = false;

  contactForm!: FormGroup;

  subscription!: Subscription;

  @ViewChild('formRef') formWrapper!: ElementRef;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      surfice: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      other: new FormControl(null),
    });
  }

  ngAfterViewInit(): void {
    this.subscription = this.sharedService.scrolledDownFormSubject.subscribe(
      () => {
        this.formWrapper.nativeElement.scrollIntoView({
          behaviour: 'smooth',
          block: 'start',
        });
      }
    );
  }

  submit = () => {
    const formData = this.contactForm.value;
    this.contactForm.reset();

    this.isMailSending = true;

    this.sharedService.sendMail(formData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.isMailSending = false;
        this.isMailSent = true;
    
        setTimeout(() => {
          this.isMailSent = false;
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
        this.isMailSending = false;
        this.isMailSent = false;    
      }
    });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
