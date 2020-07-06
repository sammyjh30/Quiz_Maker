import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Email } from '../models/email';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  private mailerUrl = environment.endpoints.mailerEndpoint

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService) {
    this.httpOptions.headers.append("Authorization", "Bearer " + auth.token);
  }



  sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.mailerUrl, email, this.httpOptions);
  }

}
