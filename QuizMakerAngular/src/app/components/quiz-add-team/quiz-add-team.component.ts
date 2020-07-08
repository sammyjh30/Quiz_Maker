import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';
import { Team } from 'src/app/models/team';

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
    let captain = await this.userService.getUserByEmail(this.captainEmailFC.value);
    let retVal = await this.userService.addTeam(this.teamNameFC.value, this.quiz.quizId);
  }

  goBack(): void {
    this.location.back();
  }

}
