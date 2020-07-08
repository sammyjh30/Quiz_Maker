import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamUser } from '../models/teamUser';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  team: Team = {
    teamId: 1,
    teamName: 'The best',
    quizId: 1,
    teamScore: 1000000,
  }

  teamMembers: TeamUser[] = [{
    teamId: 1,
    captain: true,
    userId: '1',
    email: 'email@mail.com',
    name: 'name',
    surname: 'surname',
    invitation: true
  }, {
    teamId: 1,
    captain: false,
    userId: '2',
    email: 'email2@mail.com',
    name: 'name2',
    surname: 'surname2',
    invitation: true
  }, {
    teamId: 1,
    captain: false,
    userId: '3',
    email: 'email3@mail.com',
    name: 'name3',
    surname: 'surname3',
    invitation: true
  }, {
    teamId: 4,
    captain: true,
    userId: '4',
    email: 'email4@mail.com',
    name: 'name4',
    surname: 'surname4',
    invitation: true
  }, {
    teamId: 4,
    captain: false,
    userId: '5',
    email: 'email5@mail.com',
    name: 'name5',
    surname: 'surname5',
    invitation: true
  }]

  constructor() { }

  getTeam(teamId: number): Promise<Team> {
    return new Promise((resolve) => {
      resolve(this.team);
    });
  }

  getTeamMembers(teamId: number): Promise<TeamUser[]> {
    return new Promise((resolve) => {
      resolve(this.teamMembers.filter(member => member.teamId === teamId));
    });
  }

  getCaptain(teamId: number): Promise<TeamUser> {
    return new Promise((resolve) => {
      resolve(this.teamMembers.find(user => user.captain === true && user.teamId === teamId));
    });
  }

  removeMember(member: TeamUser): Promise<TeamUser[]> {
    return new Promise((resolve) => {
      resolve(this.teamMembers.filter(m => m.teamId === member.teamId && m.userId !== member.userId));
    });
  }

  addMember(email: string, teamId: number): Promise<TeamUser> {
    throw new Error("Method not implemented.");
  }

  getTeamsByQuizId(id: number): Promise<Team[]> {
    throw new Error("Method not implemented.");
  }

}
