import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConnectionService } from '../services/connection-service';
import { ResponsiveService } from '../services/responsive-service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> = [];
  selected: string = '';
  width: string;
  screenSize: string = this.responsiveService.screenWidth;

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService,
    private responsiveService: ResponsiveService
  ) {
    this.width = '50%';
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

  onSubmit(test:any) {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
