import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../../models/team';
import { TeamUser } from '../../models/teamUser';

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
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
    this.getMembers();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  getCaptain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getCaptain(id)
      .subscribe(captain => this.captain = captain);
  }

  getMembers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getMembers(id)
      .subscribe(teamMembers => this.teamMembers = teamMembers);
  }

  removeMember(member: TeamUser): void {
    this.teamService.removeMember(member).subscribe();
  }

  addMember(email: string): void {
    this.teamService.addMember(email).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
