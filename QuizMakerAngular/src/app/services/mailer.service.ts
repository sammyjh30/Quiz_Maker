import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Email } from '../models/email';
import { Quiz } from '../models/quiz';
import { Team } from '../models/team';
import { TeamUser } from '../models/teamUser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MailerService {

  mailerUrl = environment.endpoints.mailerEndpoint;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    })
  };

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): void {
    this.http.post<Email>(this.mailerUrl, email, this.httpOptions).toPromise()
      .then(body => {
        console.log('Email sent');
      })
      .catch(error => {
        console.log(error)
      });
  }

  sendInvitation(user: TeamUser, quiz: Quiz, team: Team): void {
    let email: Email = {
      to: user.email,
      subject: "Quiz Invitation",
      html:
        `<p>Hi ${user.name}</p>` +
        `<p>You have being invited to ${quiz.quizName} on ${this.getDateString(quiz.startDateTime)}</p>` +
        `<p>Please confirm you are joining ${team.teamName} on this link ` +
        `<a href="${environment.endpoints.host + '/confirm/quiz=' + quiz.quizId + '&team=' + team.teamId}">Game On</a>.</p>`
    };
    this.sendEmail(email);
  }

  getDateString(date: Date): string {
    return date.toLocaleTimeString();
  }
}
