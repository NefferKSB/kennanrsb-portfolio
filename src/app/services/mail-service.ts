import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailData } from '../models/email-data';
import { Observable } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root'})
export class MailService {

  constructor(private http: HttpClient) {}

  sendMail(contactName: string, email: string, subject: string, message: string): Observable<any> {
    const emailData: EmailData = {contactName: contactName, email: email, subject: subject, message: message};
    console.log(this.http.post<any>(BACKEND_URL + '/send-email', emailData));
    return this.http.post<any>(BACKEND_URL + '/send-email', emailData);
  }
}
