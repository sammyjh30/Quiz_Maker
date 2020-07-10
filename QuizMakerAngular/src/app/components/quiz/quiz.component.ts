import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { User } from 'src/app/models/user';
import { User as FireUser } from "firebase/app";
import { QuizService } from '../../services/quiz.service';
import { UserService } from '../../services/user.service';
import { Quiz } from 'src/app/models/quiz';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: number;
  host: boolean;
  captain: boolean;
  teamId: string;
  user: User;
  quiz: Quiz;
  beforeDate: boolean;

  constructor(
    private route: ActivatedRoute, 
    public authService: AuthService,
    private quizService: QuizService,
    private userService: UserService) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.quizId = params.quizId;
      params.host == 1 ? this.host = true : this.host = false;
      params.captain == 1 ? this.captain = true : this.captain = false;
      if (params.teamId) {
        this.teamId = params.teamId;
      }
      console.log("Quiz Id: " + this.quizId);
      console.log("Host: " + this.host);
      console.log("Captain: " + this.captain);
      console.log("team Id: " + this.teamId);
    });
  }

  // ngOnInit(): void {
  // }

   ngOnInit() {
    this.getUser();
    this.getQuiz();
  }

  async getUser() {
    const fireUser: FireUser = JSON.parse(localStorage.getItem('user'));
    await this.userService.getUser(fireUser.uid).then( res => {
      this.user = res;
    });
    console.log(this.user);
  }

  async getQuiz() {
    await this.quizService.getQuizByQuizId(this.quizId).then( res => {
      this.quiz = res;
      let dateTime = new Date();
      console.log("DATE CHECK");
      formatDate(dateTime, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')
      console.log(this.quiz.startDateTime < dateTime);
        console.log(dateTime)
      if (this.quiz.startDateTime < dateTime) {
        console.log(this.quiz.startDateTime);
        console.log(dateTime)
        this.beforeDate = true;
      } else {
        this.beforeDate = false;
      }
    });
    console.log(this.quiz);
  }

  // isDateBeforeToday(date): boolean {
  //   return new Date(date.toDateString()) < new Date(new Date().toDateString()); 
  // }

}
