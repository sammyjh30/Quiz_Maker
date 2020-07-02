import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  quizDetails = this.fb.group({
    question: [''],
    ans1: [''],
    ans2: ['']
  })

  numberOfRounds: number = 3;
  roundNumber: number;
  listOfQuestions: Question[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addQuestion() {
    let question = new Question();
  
    question.question = this.quizDetails.controls['question'].value;
    question.correctAnswer = this.quizDetails.controls['ans1'].value;
    question.options.push(this.quizDetails.controls['ans2'].value);

    this.listOfQuestions.push(question);
    console.warn(this.listOfQuestions)
  }

}
