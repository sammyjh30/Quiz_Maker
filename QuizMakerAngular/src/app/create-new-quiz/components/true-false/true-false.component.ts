import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionDataService } from '../../services/question-data.service';
import { Question } from '../../model/Question';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  questionNumber: number

  trueFalse: FormGroup = this.fb.group({
      question: [''],
      correctAnswer: ['']
  })

  constructor(private fb: FormBuilder, private questionData: QuestionDataService)  { }

  ngOnInit(): void {
    this.questionData.currentQuestionNumber.subscribe(questionNumber => this.questionNumber = questionNumber);
  }

  addQuestion() {
    let question = this.trueFalse.controls['question'].value;
    let correctAnswer = this.trueFalse.controls['correctAnswer'].value;

    this.questionData.addQuestion(new Question(question, correctAnswer))
  }

}
