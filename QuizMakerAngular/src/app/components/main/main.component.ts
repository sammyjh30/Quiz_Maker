import { Component, OnInit } from '@angular/core';
import { User as FireUser } from "firebase/app";
// import { User } from '../../models/user';
import { QuizService } from '../../services/quiz.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  quizzes: any;
  constructor(
    private quizService: QuizService,
    private userService: UserService
  ) {
    
   }

  async ngOnInit() {
    console.log("MAIN ENTERED");
    const fireUser: FireUser = JSON.parse(localStorage.getItem('user'));
    //Get User's quiz
    await this.userService.getUserDashboard(fireUser.uid).then( res => {
      this.quizzes = res;
    });;
  }


}
