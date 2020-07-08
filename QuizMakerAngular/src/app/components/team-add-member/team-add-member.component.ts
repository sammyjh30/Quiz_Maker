import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-add-member',
  templateUrl: './team-add-member.component.html',
  styleUrls: ['./team-add-member.component.css']
})
export class TeamAddMemberComponent {
  @Input() team: Team;
  emailFormControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public teamService: TeamService) {
  }

  addMember() {
    this.teamService.addMember(this.emailFormControl.value, this.team.teamId)
      .then(this.goBack)
      .catch(error => {
        this.emailFormControl.hasError("Could not add member to team")
        console.log("could not add member to team: " + error)
      });
  }

  goBack(): void {
    this.location.back();
  }

}
