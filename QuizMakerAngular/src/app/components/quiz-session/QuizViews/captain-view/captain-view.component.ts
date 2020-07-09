import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/Models/question';

@Component({
  selector: 'app-captain-view',
  templateUrl: './captain-view.component.html',
  styleUrls: ['./captain-view.component.css']
})
export class CaptainViewComponent implements OnInit {

  question: Question;
  @Output() answer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  TFAnswer(choice) {
    console.log(choice);
    this.answer.emit(choice);
  }

  onSubmit(formdata) {
    console.log(formdata);
    this.answer.emit(formdata);
  }

}
