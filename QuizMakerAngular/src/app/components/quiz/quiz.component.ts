import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuiz()
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }

  getDateTime(): string {
    return this.quiz.startDateTime.getDate().toString();
  }

  goBack(): void {
    this.location.back();
  }

}
