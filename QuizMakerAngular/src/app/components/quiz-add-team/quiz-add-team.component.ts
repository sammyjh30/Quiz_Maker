import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../../services/quiz.service';
import { UserService } from '../../services/user.service';

import { Quiz } from '../../models/quiz';
import { TeamUser } from '../../models/teamUser';

@Component({
  selector: 'app-quiz-add-team',
  templateUrl: './quiz-add-team.component.html',
  styleUrls: ['./quiz-add-team.component.css']
})
export class QuizAddTeamComponent {
  @Input() quiz: Quiz;
  teamNameFC = new FormControl('');
  captainEmailFC = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public quizService: QuizService,
    private userService: UserService) {
  }

  async addTeam() {
    let captain: TeamUser = await this.userService.getUserByEmail(this.captainEmailFC.value);
    this.userService.createCaptainAndTheirTeam(captain.userId, captain.name, captain.surname, captain.email, this.teamNameFC.value, this.quiz.quizId);
  }

  goBack(): void {
    this.location.back();
  }

}
