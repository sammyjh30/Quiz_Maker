import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multiple-choice-questions',
  templateUrl: './multiple-choice-questions.component.html',
  styleUrls: ['./multiple-choice-questions.component.css']
})
export class MultipleChoiceQuestionsComponent implements OnInit {
  multipleChoiceQuestion;
  constructor(private formBuilder: FormBuilder) {
    this.multipleChoiceQuestion = this.formBuilder.group({
      roundNumber: '',
      questionNumber: '',
      question: '',
      answer: '',
      wrongAnswer1: '',
      wrongAnswer2: '',
      wrongAnswer3: ''
    });
  }

  ngOnInit(): void {
  }

  @Output() data: EventEmitter<any> = new EventEmitter<any>();


  onSubmit(formdata): void {
    this.data.emit(formdata);
  }
}
