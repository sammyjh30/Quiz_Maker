import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/Models/question';

@Component({
  selector: 'app-host-view',
  templateUrl: './host-view.component.html',
  styleUrls: ['./host-view.component.css']
})
export class HostViewComponent implements OnInit {
  constructor() { }

  questions: Question[]; //put your 3 in here
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() prev: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  previous() {
    this.prev.emit();
  }

  nextQuestion() {
    this.next.emit();
  }

}
