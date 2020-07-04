import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { QuestionDataService } from '../../services/question-data.service';

export class Question {
  question: string;
  correctAnswer: string;
  options: string[] = [];
}

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  numberOfRounds: number;
  roundNumber: number;
  listOfQuestions: Question[] = [];

  constructor(private questionData: QuestionDataService) { }

  ngOnInit(): void {
    this.questionData.currentNumberOfRounds.subscribe(numberOfRounds => this.numberOfRounds = numberOfRounds);
    this.questionData.currentRoundNumber.subscribe(roundNumber => this.roundNumber = roundNumber)
  }

  

}
