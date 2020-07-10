import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from 'src/app/Models/question';
import { QuizService } from '../../../../services/quiz.service';

@Component({
  selector: 'app-host-view',
  templateUrl: './host-view.component.html',
  styleUrls: ['./host-view.component.css']
})
export class HostViewComponent implements OnInit {
  constructor(
    private quizService: QuizService
  ) { }

  @Input() quizId: number;
  @Input() socket: SocketIOClient.Socket;

  questions: Question[]; //put your 3 in here
  frames;
  previousFrame;
  currentFrame;
  nextFrame;
  iterator: number;

  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() prev: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.getQuiz();
  }

  async getQuiz() {
    console.log("GETTING QUIZ: " + this.quizId);
    await this.quizService.getQuestionsByQuizId(this.quizId).then(res => {
      this.questions = res;
    });
    let views = [];
    let round = 0;
    console.log(this.questions);
    this.questions.forEach(function (value) {
      console.log(value);
      if (value.roundNumber > round) {
        views.push({type: 3, text: value.roundNumber});
        round++;
      }
      if (value.questionType == 1) {
        //T/F question
        views.push({type: 1, question: value});
      } else if (value.questionType == 2) {
        //Mult Choice question
        views.push({type: 2, question: value});
      }
    })

    this.frames = views;
    this.iterator = 0;
    this.previousFrame = {};
    this.currentFrame = this.frames[this.iterator];
    this.nextFrame = this.frames[this.iterator + 1];
    this.socket.emit('question', this.currentFrame, this.quizId);
  }

  previous() {
    // this.prev.emit();
    this.iterator--;
    if (this.iterator <= -2) {
      this.previousFrame = {};
      this.currentFrame = {};
      this.nextFrame = {};
    } else if (this.iterator <= -1) {
      this.previousFrame = {};
      this.currentFrame = {};
      this.nextFrame = this.frames[this.iterator + 1];
    } else if (this.iterator <= 0) {
      this.previousFrame = {};
      this.currentFrame = this.frames[this.iterator];
      this.nextFrame = this.frames[this.iterator + 1];
    } else {
      this.previousFrame = this.frames[this.iterator - 1];
      this.currentFrame = this.frames[this.iterator];
      this.nextFrame = this.frames[this.iterator + 1];
    }
    this.socket.emit('question', this.currentFrame, this.quizId);
  }

  nextQuestion() {
    // this.next.emit();
    this.iterator++;
    if (this.iterator <= -2) {
      this.previousFrame = {};
      this.currentFrame = {};
      this.nextFrame = {};
    } else if (this.iterator <= -1) {
      this.previousFrame = {};
      this.currentFrame = {};
      this.nextFrame = this.frames[this.iterator + 1];
    } else if (this.iterator <= 0) {
      this.previousFrame = {};
      this.currentFrame = this.frames[this.iterator];
      this.nextFrame = this.frames[this.iterator + 1];
    } else {
      this.previousFrame = this.frames[this.iterator - 1];
      this.currentFrame = this.frames[this.iterator];
      this.nextFrame = this.frames[this.iterator + 1];
    }
    this.socket.emit('question', this.currentFrame, this.quizId);
  }
  // constructor() { }

  // questions: Question[]; //put your 3 in here
  // @Output() next: EventEmitter<any> = new EventEmitter<any>();
  // @Output() prev: EventEmitter<any> = new EventEmitter<any>();

  // ngOnInit(): void {
  // }

  // previous() {
  //   this.prev.emit();
  // }

  // nextQuestion() {
  //   this.next.emit();
  // }

}
