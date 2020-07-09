import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getUser(userId: string): Promise<any> {
    const data = { userId: userId.toString() };
    return this.http.get(UserService.link + '/getUser', { params: data }).toPromise();
  }

  getUserByEmail(emailAddress: string): Promise<any> {
    const data = {
      email: emailAddress
    };
    return this.http.get(UserService.link + '/getUserByEmail', data).toPromise();
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

  getTeam(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.get(UserService.link + '/getTeam', { params: data }).toPromise();
  }

  getTeamsByQuizId(quizId: number): Promise<any> {
    const data = { quizId: quizId.toString() };
    return this.http.get(UserService.link + '/getTeamsByQuizId', { params: data }).toPromise();
  }

  increaseTeamScore(teamId: number, amountToAdd: number): Promise<any> {
    const data = {
      teamId,
      increase: amountToAdd
    };

    return this.http.put(UserService.link + '/increaseScore', data).toPromise();
  }

  getTeamMembers(teamId: number): Promise<any> {
    const data = { teamId: teamId.toString() };
    return this.http.get(UserService.link + '/getTeamMembers', { params: data }).toPromise();
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
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.delete(UserService.link + '/removeTeamMember', httpOptions).toPromise();
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

}
