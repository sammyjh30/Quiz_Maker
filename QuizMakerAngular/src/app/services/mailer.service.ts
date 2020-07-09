import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Email } from '../models/email';
import { Quiz } from '../models/quiz';
import { Team } from '../models/team';
import { TeamUser } from '../models/teamUser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
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

  sendTestEmail(): void {
    let email: Email = {
      to: "kevinjulius97@gmail.com",
      subject: "Quiz: Test Email",
      html:
        `<p>Hi Test</p>` +
        `<p>This is a test email</p>`
    };
    this.sendEmail(email);
  }

  sendInvitationEmail(quiz: Quiz, team: Team, captain: TeamUser, user: TeamUser): void {
    let email: Email = {
      to: user.email,
      subject: "Quiz: Team Invitation",
      html:
        `<p>Hi ${user.name}</p>` +
        `<p>You have being invited to ${quiz.quizName} on ${this.getDateString(quiz.startDateTime)}</p>` +
        `<p>You have been invited by ${captain.name} ${captain.surname}. Please confirm that you are joining team (${team.teamName}) on this link ` +
        `<a href="${environment.endpoints.host + '/join?quizId=' + quiz.quizId + '&teamId=' + team.teamId}">Game On</a>.</p>`
    };
    this.sendEmail(email);
  }

  sendAcceptEmail(user: User, captain: User): void {
    let email: Email = {
      to: captain.email,
      subject: "Team Invitation Accepted",
      html:
        `<p>Hi ${captain.name}</p>` +
        `<p>${user.name} has accepted the invitation and has joined you team.</p>`
    };
    this.sendEmail(email);
  }

  sendRejectEmail(user: User, captain: User): void {
    let email: Email = {
      to: captain.email,
      subject: "Team Invitation Rejected",
      html:
        `<p>Hi ${captain.name}</p>` +
        `<p>${user.name} has reject the invitation to join you team.</p>`
    };
    this.sendEmail(email);
  }

  getDateString(date: Date): string {
    return date.toLocaleTimeString();
  }
}
