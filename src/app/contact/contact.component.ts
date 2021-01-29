import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConnectionService } from '../services/connection-service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> = [];
  selected: string = '';

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
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
