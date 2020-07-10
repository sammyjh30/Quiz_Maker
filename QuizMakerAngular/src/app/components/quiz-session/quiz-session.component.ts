import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import * as io from 'socket.io-client'
// import { User } from 'firebase';
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';

const SOCKET_ENDPOINT = environment.endpoints.backend;

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  @Input() quizId: string;
  @Input() host: boolean;
  @Input() captain: boolean;
  player: boolean;
  @Input() teamId: string;
  @Input() user: User;
  username: string;
  public socket: SocketIOClient.Socket;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.userData != null && this.authService.userData.displayName != null) {
      this.username = this.authService.userData.displayName;
    } else if (this.user) {
      this.username = this.user.name ? this.user.name : this.user.email;
    } else {
      this.username = "User";
    }
    this.player = !this.host && !this.captain ? true : false;
    this.setupSocketConnection();
    //
    console.log(this.quizId);
    console.log(this.host);
    console.log(this.captain);
    console.log(this.teamId);
    console.log(this.user);
    console.log("USERNAME: " + this.username);
    //
  }


  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT, {query: 'user=' + this.username});
    console.log("Quiz socket: " + this.socket)
  }

}
