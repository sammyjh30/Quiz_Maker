import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tfquestion',
  templateUrl: './tfquestion.component.html',
  styleUrls: ['./tfquestion.component.css']
})
export class TFquestionComponent implements OnInit {
  TFQuestion;
  constructor(private formBuilder: FormBuilder) {

    this.TFQuestion = this.formBuilder.group({
      roundNumber: '',
      questionNumber: '',
      question: '',
      answer: ''
    });
  }

  ngOnInit(): void {
  }

  @Output() data: EventEmitter<any> = new EventEmitter<any>();


  onSubmit(formdata): void {
    this.data.emit(formdata);
  }

}
