import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { TeamUser } from '../models/teamUser';
import { Team } from '../models/team';
import { TeamMember } from '../models/teammember';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static link = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addUser(userId: string, name: string, surname: string, email: string): Promise<any> {
    const data = {
      userId,
      name,
      surname,
      email
    };

    return this.http.post(UserService.link + '/addUser', data).toPromise();
  }

  updateUser(userId: string, name: string, surname: string, email: string): Promise<any> {  // set null for the stuff you don't want to change
    const data = {
      userId,
      name,
      surname,
      email
    };

    return this.http.put(UserService.link + '/updateUser', data).toPromise();
  }

  deleteUser(userId: string): Promise<any> {
    const data = { userId: userId.toString() };
    return this.http.delete(UserService.link + '/deleteUser', { params: data }).toPromise();
  }

  getUser(userId: string): Promise<User> {
    const data = { userId: userId.toString() };
    return this.http.get<User>(UserService.link + '/getUser', { params: data }).toPromise();
  }

  getUserByEmail(emailAddress: string): Promise<User> {
    const data = {
      email: emailAddress
    };
    return this.http.put<User>(UserService.link + '/getUserByEmail', data).toPromise();
  }

  addTeam(teamName: string, quizId: number): Promise<any> {
    const data = {
      teamName,
      quizId
    };
    return this.http.post(UserService.link + '/addTeam', data).toPromise();
  }

  updateTeamName(teamName: string, teamId: number): Promise<any> {
    const data = {
      teamName,
      teamId
    };
    return this.http.put(UserService.link + '/updateTeamName', data).toPromise();
  }

  deleteTeam(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.delete(UserService.link + '/deleteTeam', { params: data }).toPromise();
  }

  getTeam(teamId: number): Promise<Team> {
    const data = { teamId: teamId.toString() };
    return this.http.get<Team>(UserService.link + '/getTeam', { params: data }).toPromise();
  }

  getTeamsByQuizId(quizId: number): Promise<Team[]> {
    const data = { quizId: quizId.toString() };
    return this.http.get<Team[]>(UserService.link + '/getTeamsByQuizId', { params: data }).toPromise();
  }

  increaseTeamScore(teamId: number, amountToAdd: number): Promise<any> {
    const data = {
      teamId,
      increase: amountToAdd
    };

    return this.http.put(UserService.link + '/increaseScore', data).toPromise();
  }

  getTeamMembers(teamId: number): Promise<TeamMember[]> {
    const data = { teamId: teamId.toString() };
    return this.http.get<TeamMember[]>(UserService.link + '/getTeamMembers', { params: data }).toPromise();
  }

  addTeamMember(teamId: number, userId: string, captain: boolean): Promise<any> {
    const data = {
      teamId,
      userId,
      captain
    };
    return this.http.post(UserService.link + '/addTeamMember', data).toPromise();
  }

  removeTeamMember(teamId: number, userId: string): Promise<any> {
    const data = {
      teamId,
      userId
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: data
    };
    return this.http.delete(UserService.link + '/removeTeamMember', httpOptions).toPromise();
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
    return this.http.post(UserService.link + '/removeTeamMember', data).toPromise();
  }

  getUserDashboard(userId: number): Promise<any> {
    const data = { userId: userId.toString() };
    return this.http.get(UserService.link + '/getTeamMembers', { params: data }).toPromise();
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
    const data = { email, teamId: teamId.toString() };
    return this.http.get<TeamUser>(UserService.link + '/getTeamsByQuizId', { params: data }).toPromise();
  }

  getTeamUsersByTeamId(teamId: number): Promise<TeamUser[]> {
    const data = { teamId: teamId.toString() };
    return this.http.get<TeamUser[]>(UserService.link + '/getTeamUserByTeamId', { params: data }).toPromise();
  }

  changeCaptainRandom(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.put(UserService.link + '/changeCaptainRandom', { params: data }).toPromise();
  }

  changeCaptain(teamId: number, userId: string): Promise<any> {
    const data = {
      teamId,
      userId
    };
    return this.http.put(UserService.link + '/changeCaptain', data).toPromise();
  }


}
