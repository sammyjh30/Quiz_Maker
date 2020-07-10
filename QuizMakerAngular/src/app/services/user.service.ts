import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { TeamUser } from '../models/teamUser';
import { Team } from '../models/team';
import { TeamMember } from '../models/teammember';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  link = environment.endpoints.userEndpoint;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    })
  };

  constructor(private http: HttpClient) { }

  addUser(userId: string, name: string, surname: string, email: string): Promise<any> {
    const data = {
      userId,
      name,
      surname,
      email
    };

    return this.http.post(this.link + '/addUser', data, this.httpOptions).toPromise();
  }

  getUser(userId: string): Promise<User> {
    let url = `${this.link}/getUser/${userId}`
    return this.http.get<User>(url, this.httpOptions).toPromise();
  }

  updateUser(userId: string, name: string, surname: string, email: string): Promise<any> {  // set null for the stuff you don't want to change
    const data: User = {
      userId: userId,
      name: name,
      surname: surname,
      email: email
    };
    return this.http.put(this.link + '/updateUser', data, this.httpOptions).toPromise();
  }

  deleteUser(userId: string): Promise<any> {
    let url = `${this.link}/deleteUser/${userId}`;
    return this.http.delete(url, this.httpOptions).toPromise();
  }

  getUserByEmail(emailAddress: string): Promise<User> {
    let url = `${this.link}/getUserByEmail/${emailAddress}`;
    return this.http.get<User>(url, this.httpOptions).toPromise();
  }

  addTeam(teamName: string, quizId: number): Promise<any> {
    const data = {
      teamName,
      quizId
    };
    return this.http.post(this.link + '/addTeam', data, this.httpOptions).toPromise();
  }

  updateTeamName(teamName: string, teamId: number): Promise<any> {
    const data = {
      teamName,
      teamId
    };
    return this.http.put(this.link + '/updateTeamName', data, this.httpOptions).toPromise();
  }

  deleteTeam(teamId: number): Promise<any> {
    let url = `${this.link}/deleteTeam/${teamId}`;
    return this.http.delete(url, this.httpOptions).toPromise();
  }

  getTeam(teamId: number): Promise<Team> {
    let url = `${this.link}/getTeam/${teamId}`;
    return this.http.get<Team>(url, this.httpOptions).toPromise();
  }

  getTeamsByQuizId(quizId: number): Promise<Team[]> {
    let url = `${this.link}/getTeamsByQuizId/${quizId}`;
    return this.http.get<Team[]>(url, this.httpOptions).toPromise();
  }

  increaseTeamScore(teamId: number, amountToAdd: number): Promise<any> {
    const data = {
      teamId,
      increase: amountToAdd
    };

    return this.http.put(this.link + '/increaseScore', data, this.httpOptions).toPromise();
  }

  getTeamMembers(teamId: number): Promise<TeamMember[]> {
    let url = `${this.link}/getTeamMembers/${teamId}`;
    return this.http.get<TeamMember[]>(url, this.httpOptions).toPromise();
  }

  addTeamMember(teamId: number, userId: string, captain: boolean): Promise<any> {
    const data = {
      teamId,
      userId,
      captain
    };
    return this.http.post(this.link + '/addTeamMember', data, this.httpOptions).toPromise();
  }

  removeTeamMember(teamId: number, userId: string): Promise<any> {
    let url = `${this.link}/removeTeamMember/${userId}/${teamId}`;
    return this.http.delete(url, this.httpOptions).toPromise();
  }

  getTeamUserByEmail(email: string): TeamUser {
    throw new Error("Method not implemented.");
  }

  getTeamUser(userId: string): TeamUser {
    throw new Error("Method not implemented.");
  }

  createCaptainAndTheirTeam(userId: string, name: string, surname: string, email: string, teamName: string, quizId: number): Promise<any> {
    const data = {
      userId,
      name,
      surname,
      email,
      teamName,
      quizId
    };
    return this.http.post(this.link + '/removeTeamMember', data, this.httpOptions).toPromise();
  }

  getUserDashboard(userId: string): Promise<User[]> {
    let url = `${this.link}/dashboard/${userId}`;
    return this.http.get<any>(url, this.httpOptions).toPromise();
  }


  removeMember(member: TeamUser): Promise<TeamUser[]> {
    return this.removeTeamMember(member.teamId, member.userId).then((data) => {
      return this.getTeamUsersByTeamId(member.teamId);
    }).catch((err) => {
      console.log(err);
      return this.getTeamUsersByTeamId(member.teamId);
    });
  }

  getUserByEmailandTeamId(email: string, teamId: number): Promise<TeamUser> {
    let url = `${this.link}/getUserByEmailandTeamId/${email}/${teamId}`;
    return this.http.get<TeamUser>(url, this.httpOptions).toPromise();
  }

  getTeamUsersByTeamId(teamId: number): Promise<TeamUser[]> {
    let url = `${this.link}/getTeamUserByTeamId/${teamId}`;
    return this.http.get<TeamUser[]>(url, this.httpOptions).toPromise();
  }

  changeCaptainRandom(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.put(this.link + '/changeCaptainRandom', data, this.httpOptions).toPromise();
  }

  changeCaptain(teamId: number, userId: string): Promise<any> {
    const data = {
      teamId,
      userId
    };
    return this.http.put(this.link + '/changeCaptain', data, this.httpOptions).toPromise();
  }


}
