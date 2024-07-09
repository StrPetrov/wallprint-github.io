import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isMailSending = false;
  isMailSent = false;

  contactForm!: FormGroup

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
      this.contactForm = new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        adress: new FormControl(null, Validators.required),
        phoneNumber: new FormControl(null, Validators.required),
        surfice: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        other: new FormControl(null)
      })
  }

  sendMailAnimation = () => {
    this.isMailSending = true

    setTimeout(() => {
      this.isMailSent = true
    }, 1000)
  }

  submit = () => {
    this.sendMailAnimation();
  }
}
