import { Component, OnInit, Input } from '@angular/core';
import * as io from 'socket.io-client'
import { AuthService } from "../../services/auth.service";
import { environment } from 'src/environments/environment';

const SOCKET_ENDPOINT = environment.endpoints.backend;

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
  message: string;
  messages: string[] = [];
  // Room id (either quiz or team)
  @Input() public roomId: string;
  @Input() public socket: SocketIOClient.Socket;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    if (this.socket != null) {
      this.setupRoomConnection();
    }
  }

  setupRoomConnection() {
    console.log("Room ID: " + this.roomId);
    this.socket.emit('join', this.roomId);

    this.socket.on('message-broadcast', (data) => {
      if (data.roomId === this.roomId && data.msg) {
        this.messages.push(data.username + ": " + data.msg + "\t" + data.timeStamp);
       }
     });
  }

  SendMessage() {
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes()
    this.socket.emit('message', this.message, this.roomId, time);
    this.messages.push( this.authService.userData.displayName + ": " + this.message + "\t" + time);
    this.message = '';
  }

}
