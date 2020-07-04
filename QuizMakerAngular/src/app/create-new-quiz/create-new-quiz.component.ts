import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from './services/question-data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-create-new-quiz',
  templateUrl: './create-new-quiz.component.html',
  styleUrls: ['./create-new-quiz.component.css'],
  providers: [
    QuestionDataService
  ]
})
export class CreateNewQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
