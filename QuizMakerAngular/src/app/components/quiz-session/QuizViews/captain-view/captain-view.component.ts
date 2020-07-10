import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Question } from 'src/app/Models/question';
import { QuizService } from '../../../../services/quiz.service';

@Component({
  selector: 'app-captain-view',
  templateUrl: './captain-view.component.html',
  styleUrls: ['./captain-view.component.css']
})
export class CaptainViewComponent implements OnInit {



  constructor(private quizService: QuizService) { }
  @Input() quizId: number;
  @Input() socket: SocketIOClient.Socket;

  currentFrame;

  ngOnInit(): void {
    this.currentFrame = {};
    this.socket.on('question-broadcast', (data) => {
      if (data.roomId === this.quizId && data.question) {
        this.currentFrame = data.question;
       }
     });
  }


  // TFAnswer(choice) {
  //   console.log(choice);
  //   this.answer.emit(choice);
  // }

  // onSubmit(formdata) {
  //   console.log(formdata);
  //   this.answer.emit(formdata);
  // }

  // question: Question;
  // @Output() answer: EventEmitter<any> = new EventEmitter();

  // constructor(private quizService: QuizService) { }
  // @Input() quizId: number;
  // @Input() socket: SocketIOClient.Socket;

  // ngOnInit(): void {
  // }

  // TFAnswer(choice) {
  //   console.log(choice);
  //   this.answer.emit(choice);
  // }

  // onSubmit(formdata) {
  //   console.log(formdata);
  //   this.answer.emit(formdata);
  // }

}
