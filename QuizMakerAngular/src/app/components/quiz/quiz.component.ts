import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Quiz } from '../../models/quiz';
import { Team } from '../../models/team';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuiz();
    this.getTeams();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }

  getTeams(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getTeams(id)
      .subscribe(teams => this.teams = teams);
  }

  goBack(): void {
    this.location.back();
  }

}
