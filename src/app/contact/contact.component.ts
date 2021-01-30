import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponsiveService } from '../services/responsive-service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> = [];
  selected: string;
  width: string;
  screenSize: string = this.responsiveService.screenWidth;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private responsiveService: ResponsiveService
  ) {
    this.width = '50%';
    this.selected = '';
    this.contactForm = fb.group({
      Fullname: ['', Validators.required],
      Email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      Subject: ['', Validators.required],
      Message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  onResize(event: any){
    this.responsiveService.checkWidth();
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  setResponsiveAttrs(screenSize: string) {
    if(screenSize === 'lg') {
      this.width = '50%';
    }
    if(screenSize === 'md') {
      this.width = '50%';
    }
    if(screenSize === 'sm') {
      this.width = '100%';
    }
  }

  onSubmit() {
    let contactRequest = {
      name: this.contactForm.value.Fullname,
      email: this.contactForm.value.Email,
      subject: this.contactForm.value.Subject,
      message: this.contactForm.value.Message
    }
    this.http.post('http://localhost:3000/sendmail', contactRequest).subscribe(
      data => {
        let res:any = data;
        console.log(`${contactRequest.name} has been notified, the message id is ${res.messageId}`);
      },
      err => {
        console.log(err);
      }
    )
  }
}
