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

  // User  methods

  addUser(name: string, surname: string, email: string): Promise<any> {
    const data = {
      name,
      surname,
      email
    };

    return this.http.post(UserService.link + '/addUser', data).toPromise();
  }

  getUser(userId: number): Promise<any> {
    const data = { userId: userId.toString() };
    return this.http.get(UserService.link + '/getUser', { params: data }).toPromise();
  }

  getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  updateUser(userId: number, name: string, surname: string, email: string): Promise<any> {  // set null for the stuff you don't want to change
    const data = {
      name,
      surname,
      email
    };

    return this.http.put(UserService.link + '/updateUser', data).toPromise();
  }

  deleteUser(userId: number): Promise<any> {
    const data = { userId: userId.toString() };
    return this.http.delete(UserService.link + '/deleteUser', { params: data }).toPromise();
  }

  // Team methods

  addTeam(teamName: string, quizId: number): Promise<any> {
    const data = {
      teamName,
      quizId
    };
    return this.http.post(UserService.link + '/addTeam', data).toPromise();
  }

  getTeam(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.get(UserService.link + '/getTeam', { params: data }).toPromise();
  }

  getTeamsByQuizId(quizId: number): Promise<any> {
    const data = { quizId: quizId.toString() };
    return this.http.get(UserService.link + '/getTeamsByQuizId', { params: data }).toPromise();
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

  increaseTeamScore(teamId: number, amountToAdd: number): Promise<any> {
    const data = {
      teamId,
      increase: amountToAdd
    };

    return this.http.put(UserService.link + '/increaseScore', data).toPromise();
  }

  // Team member methods

  createCaptainAndTheirTeam(team: Team, captain: TeamMember): Promise<any> {
    throw new Error("Method not implemented.");
  }

  addTeamMember(teamMember: TeamMember): Promise<any> {
    return this.http.post(UserService.link + '/addTeamMember', teamMember).toPromise();
  }

  getTeamMembers(teamId: number): Promise<TeamUser[]> {
    const data = { teamId: teamId.toString() };
    return this.http.get<TeamUser[]>(UserService.link + '/getTeamMembers', { params: data }).toPromise();
  }

  getUserByEmailandTeamId(email: string, teamId: number): Promise<TeamUser> {
    throw new Error("Method not implemented.");
  }

  removeTeamMember(teamId: number, userId: number): Promise<any> {
    const data = {
      teamId,
      userId
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.delete(UserService.link + '/removeTeamMember', httpOptions).toPromise();
  }

  removeMember(member: TeamUser): Promise<TeamUser[]> {
    throw new Error("Method not implemented.");
  }

  getTeamUserByEmail(arg0: string): TeamUser {
    throw new Error("Method not implemented.");
  }
  getTeamUser(hostId: string): TeamUser {
    throw new Error("Method not implemented.");
  }

}
