import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ResponsiveService } from '../services/responsive-service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { MailService } from '../services/mail-service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const BACKEND_URL = environment.apiUrl;

export interface DialogData {}
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatButtonModule]
})

export class ContactComponent implements OnInit {
  form!: FormGroup; //Add '!' to indicate definite assignment
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> = [];
  selected: string;
  width: string;
  screenSize: string = this.responsiveService.screenWidth;

  @HostListener('input') oninput() {
    if (this.form.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private responsiveService: ResponsiveService,
    public mailService: MailService,
    public dialog: MatDialog
  ) {
    this.width = '50%';
    this.selected = '';
  }

  ngOnInit() {
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);

    this.form = this.formBuilder.group(
      {
        contactName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        subject: ['', Validators.required],
        message: ['', Validators.required],
      }
    );
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

  onSubmit() {
    if(this.form.invalid) {
      return;
    }
    this.mailService.sendMail(
      this.form.value.contactName,
      this.form.value.email,
      this.form.value.subject,
      this.form.value.message
    ).subscribe({
      next: () => {
        // Email sent successfully
        // Reset the form or show a success message
        this.openDialog();
        this.form.reset();
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
