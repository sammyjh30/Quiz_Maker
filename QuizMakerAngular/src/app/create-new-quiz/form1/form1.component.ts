import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  myquestionType = '';

  quizDetails = this.fb.group({
    quizName: ['', Validators.required],
    numberOfRounds: ['', Validators.required, Validators.min(1)],
    questionsPerRound: ['', Validators.required, , Validators.min(1)],
    quizDate: ['', Validators.required],
    questionType: ['', Validators.required],
    numberOfChoices: ['', Validators.min(3)]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.quizDetails.value)
  }

  onChange(event): void {
    console.log(event);
  }

  isMultipleChoice() {
    if (this.myquestionType == 'multipleChoice') return true

    return false
  }

}
