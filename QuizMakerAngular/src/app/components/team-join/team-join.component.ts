import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User as FireUser } from "firebase/app";

import { Quiz } from '../../models/quiz';
import { Team } from '../../models/team';
import { User } from '../../models/user';

import { UserService } from '../../services/user.service';
import { MailerService } from '../../services/mailer.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-team-join',
  templateUrl: './team-join.component.html',
  styleUrls: ['./team-join.component.css']
})
export class TeamJoinComponent implements OnInit {
  currentUser: User;
  quiz: Quiz;
  team: Team;
  captain: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private mailerService: MailerService,
    private quizService: QuizService
  ) {
    this.getUser();
    this.getQuiz();
    this.getTeam();
  }

  ngOnInit(): void {
  }

  getUser(): void {
    const fireUser: FireUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserByEmail(fireUser.email)
      .then(user => this.currentUser = user)
      .catch(error => console.log(error));
  }

  getQuiz(): void {
    const id = +this.route.snapshot.queryParamMap.get('quizId');
    this.quizService.getQuizByQuizId(id)
      .then(quiz => this.quiz = quiz)
      .catch(error => console.log(error));
  }

  getTeam(): void {
    const id = +this.route.snapshot.queryParamMap.get('teamId');
    this.userService.getTeam(id)
      .then(team => {
        this.team = team;
        this.getCaptain();
      })
      .catch(error => console.log(error));
  }

  getCaptain(): void {
    this.userService.getUser(this.team.teamCaptainId)
      .then(captain => this.captain = captain)
      .catch(error => console.log(error));
  }

  acceptInvitation(): void {
    this.userService.addTeamMember(this.team.teamId, this.currentUser.userId, false)
      .then(accept => this.mailerService.sendAcceptEmail(this.currentUser, this.captain))
      .catch(error => console.log(error));
  }

  rejectInvitation(): void {
    this.mailerService.sendRejectEmail(this.currentUser, this.captain)
  }

  goBack(): void {
    this.location.back();
  }

}
