import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  quizDetails = this.fb.group({
    quizName: ['', Validators.required],
    numberOfRounds: ['', [Validators.required, Validators.min(1)]],
    questionsPerRound: ['', [Validators.required, , Validators.min(1)]],
    quizDate: ['', Validators.required],
    questionType: ['', Validators.required],
    numberOfChoices: ['', Validators.min(3)]
  })

  constructor(private fb: FormBuilder, private questionData: QuestionDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.quizDetails.value)
  }

  changeNumberOfRounds(): void {
    let numberOfRounds = this.quizDetails.get('numberOfRounds').value;
    this.questionData.changeNumberOfRounds(numberOfRounds);
  }

  isMultipleChoice() {
    let questionType = this.quizDetails.controls.questionType.value;
    if (questionType == 'multipleChoice') return true

    return false
  }


}
