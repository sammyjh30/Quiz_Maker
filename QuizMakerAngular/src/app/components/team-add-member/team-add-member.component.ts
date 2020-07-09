import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { MailerService } from 'src/app/services/mailer.service';

import { Team } from 'src/app/models/team';
import { Quiz } from 'src/app/models/quiz';
import { TeamUser } from 'src/app/models/teamUser';

@Component({
  selector: 'app-team-add-member',
  templateUrl: './team-add-member.component.html',
  styleUrls: ['./team-add-member.component.css']
})
export class TeamAddMemberComponent {

  @Input() currentUser: TeamUser;
  @Input() quiz: Quiz;
  @Input() team: Team;
  @Input() captain: TeamUser;

  emailFormControl = new FormControl('');

  constructor(
    private location: Location,
    private mailerService: MailerService) {
  }

  inviteMember(): void {
    this.mailerService.sendInvitationEmail(this.quiz, this.team, this.captain, this.currentUser);
  }

  goBack(): void {
    this.location.back();
  }

}
