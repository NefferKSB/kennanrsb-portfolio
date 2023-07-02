import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, NgForm, UntypedFormBuilder } from '@angular/forms';
import { ResponsiveService } from '../services/responsive-service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MailService } from '../services/mail-service';

const BACKEND_URL = environment.apiUrl;

export interface DialogData {}
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: UntypedFormGroup;
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
    private fb: UntypedFormBuilder,
    private responsiveService: ResponsiveService,
    public mailService: MailService,
    public dialog: MatDialog
  ) {
    this.width = '50%';
    this.selected = '';
    this.contactForm = fb.group({
      Fullname: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
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

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {});
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.mailService.sendMail(
      form.value.contactName,
      form.value.email,
      form.value.subject,
      form.value.message
    ).subscribe({
      next: () => {
        // Email sent successfully
        // Reset the form or show a success message
        this.openDialog();
        form.reset();
      },
      error: (error) => {
        // Handle error
        console.error('Failed to send email:', error);
      }
    });
  }
}
@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
