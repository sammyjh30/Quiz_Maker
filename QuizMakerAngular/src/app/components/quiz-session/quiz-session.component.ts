import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AuthService } from "../../services/auth.service";
import * as io from 'socket.io-client'
// import { User } from 'firebase';
import { User } from '../../models/user';

const SOCKET_ENDPOINT = 'localhost:3001';

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  quizId: string;
  teamId: string;
  user: User;
  public socket: SocketIOClient.Socket;

  constructor(
    private route: ActivatedRoute, 
    public authService: AuthService) { 

    this.route.params.subscribe( params => {
      console.log(params);
      this.quizId = params.id;
      if (params.teamId) {
        this.teamId = params.teamId;
      }
    });
  }

  ngOnInit(): void {
    if (this.authService.userData != null) {
      console.log(this.authService.userData.displayName);
      console.log("Connecting to socket");
      this.setupSocketConnection();
      console.log("TEAM ID: " + this.teamId);
    } else {
      console.log("No user")
    }
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT, {query: 'user=' + this.authService.userData.displayName});
    console.log("Quiz socket: " + this.socket)
  }

}
