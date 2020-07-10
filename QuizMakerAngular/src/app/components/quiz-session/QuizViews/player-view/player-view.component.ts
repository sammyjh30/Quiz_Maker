import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/Models/question';
import { QuizService } from '../../../../services/quiz.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
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

  // question: Question;
  // ngOnInit(): void {
  // }

}
