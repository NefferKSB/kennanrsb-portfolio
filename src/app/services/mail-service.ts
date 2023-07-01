import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailData } from '../models/email-data';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root'})
export class MailService {

  constructor(private http: HttpClient) {}

  sendMail(contactName: string, email: string, subject: string, message: string) {
    const emailData: EmailData = {contactName: contactName, email: email, subject: subject, message: message};
    return this.http.post<any>(BACKEND_URL + '/send-email', emailData);
  }
}
