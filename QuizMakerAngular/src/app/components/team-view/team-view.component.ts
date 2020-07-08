import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../../models/team';
import { TeamUser } from '../../models/teamUser';

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  team: Team;
  captain: TeamUser;
  teamMembers: TeamUser[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getQuiz();
    this.getCaptain();
    this.getTeamMembers();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .then(team => this.team = team);
  }

  getCaptain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getCaptain(id)
      .then(captain => this.captain = captain);
  }

  getTeamMembers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeamMembers(id)
      .then(teamMembers => this.teamMembers = teamMembers);
  }

  removeMember(member: TeamUser): void {
    this.teamService.removeMember(member)
    .then(teamMembers => this.teamMembers = teamMembers);
  }

}
