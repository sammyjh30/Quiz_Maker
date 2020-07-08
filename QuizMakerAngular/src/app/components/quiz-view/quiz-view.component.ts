import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Quiz } from '../../models/quiz';
import { Team } from '../../models/team';

import { QuizService } from '../../services/quiz.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  quiz: Quiz;
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private quizService: QuizService,
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getQuiz();
    this.getTeams();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getQuiz(id)
      .then(quiz => this.quiz = quiz)
  }

  getTeams(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTeamsByQuizId(id)
      .then(teams => this.teams = teams);
  }

  removeTeam(team: Team): void {
    this.userService.deleteTeam(team.teamId)
      .then()
      .catch();
  }

  goBack(): void {
    this.location.back();
  }

}
