import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms';

import { Question } from '../../model/Question';
import { QuestionDataService } from '../../services/question-data.service'

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  questionNumber: number;

  multiple = this.fb.group({
    question: [''],
    option1: this.fb.group({
      answer: [''],
      check: [''],
    }),
    option2: this.fb.group({
      answer: [''],
      check: [''],
    }),
    option3: this.fb.group({
      answer: [''],
      check: [''],
    }),
    option4: this.fb.group({
      answer: [''],
      check: [''],
    }),
  })

  constructor(private fb: FormBuilder, private questionData: QuestionDataService) { }

  ngOnInit(): void {
    this.questionData.currentQuestionNumber.subscribe(currentQuestionNumber => this.questionNumber = currentQuestionNumber);
  }

  addQuestion() {
    let question = this.multiple.controls['question'].value;
    let correctAnswer = this.getCorrectAnswer();
    let options = this.getOptions();

    this.questionData.addQuestion(new Question(question, correctAnswer, options));
    this.questionData.changeQuestionNumber();
  }

  getCorrectAnswer(): string {
    let correctAnswer: string = '';
    Object.keys(this.multiple.controls).forEach((key) => {
      const abstractControl = this.multiple.get(key);
      if (abstractControl instanceof FormGroup && abstractControl.get('check').value) {
        correctAnswer = abstractControl.get('answer').value;
      }
    });

    return correctAnswer;
  }

  getOptions(): string[] {
    let options: string[] = [];
    Object.keys(this.multiple.controls).forEach((key) => {
      const abstractControl = this.multiple.get(key);
      if (abstractControl instanceof FormGroup && !abstractControl.get('check').value) {
        options.push(abstractControl.get('answer').value);
      }
    });

    return options;
  }

  answer1Checked(event) {
    let checked = event.target.checked;
    this.enableControl(this.multiple.get('option2').get('check'), !checked);
    this.enableControl(this.multiple.get('option3').get('check'), !checked);
    this.enableControl(this.multiple.get('option4').get('check'), !checked);
  }

  answer2Checked(event) {
    let checked = event.target.checked;
    this.enableControl(this.multiple.get('option1').get('check'), !checked);
    this.enableControl(this.multiple.get('option3').get('check'), !checked);
    this.enableControl(this.multiple.get('option4').get('check'), !checked);
  }

  answer3Checked(event) {
    let checked = event.target.checked;
    this.enableControl(this.multiple.get('option2').get('check'), !checked);
    this.enableControl(this.multiple.get('option1').get('check'), !checked);
    this.enableControl(this.multiple.get('option4').get('check'), !checked);
  }

  answer4Checked(event) {
    let checked = event.target.checked;
    this.enableControl(this.multiple.get('option2').get('check'), !checked);
    this.enableControl(this.multiple.get('option3').get('check'), !checked);
    this.enableControl(this.multiple.get('option1').get('check'), !checked);
  }

  enableControl(control: AbstractControl, enabled: Boolean) {
    if (enabled) {
      control.enable();
    } else {
      control.disable();
    }
  }

}
