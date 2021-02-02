import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ResponsiveService } from '../services/responsive-service';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { MailService } from '../services/mail-service';

const BACKEND_URL = environment.apiUrl;

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
    private responsiveService: ResponsiveService,
    public mailService: MailService
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

  onSubmit(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.mailService.sendMail(form.value.contactName, form.value.email, form.value.subject, form.value.message);

  }

  // onSubmit() {
  //   let contactRequest = {
  //     name: this.contactForm.value.Fullname,
  //     email: this.contactForm.value.Email,
  //     subject: this.contactForm.value.Subject,
  //     message: this.contactForm.value.Message
  //   }
  //   this.http.post(BACKEND_URL + '/sendmail', contactRequest).subscribe(response => {
  //     console.log(response);
  //   })
  //   //this.contactForm.reset();
  // }
}
