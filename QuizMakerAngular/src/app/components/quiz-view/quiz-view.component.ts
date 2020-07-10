import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User as FireUser } from "firebase/app";

import { Quiz } from '../../models/quiz';
import { Team } from '../../models/team';

import { QuizService } from '../../services/quiz.service';
import { UserService } from '../../services/user.service';
import { TeamUser } from '../../models/teamUser';
import { User } from '../../models/user';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  host: User;
  @Input() quiz: Quiz;
  teams: Team[];
  currentUser: TeamUser;
  isHost: boolean;
  @Input() quizId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private quizService: QuizService,
    private userService: UserService
  ) {
    
  }

  ngOnInit() {
    if (this.quiz) {
      this.getQuiz();
      this.getTeams();
    }
    
  }

  async getQuiz(): Promise<void> {
    // const quizId = +this.route.snapshot.paramMap.get('id');
    // await this.quizService.getQuizByQuizId(this.quizId).then( res => {
    //   this.quiz = res;
    // });
    await this.userService.getUser(this.quiz.hostId).then( res => {
      this.host = res;
    });
    const fireUser: FireUser = JSON.parse(localStorage.getItem('user'));
    this.isHost = this.host ? this.host.userId === this.quiz.hostId : null;
    if (!this.isHost) {
      await this.userService.getUserByEmail(fireUser.email).then( res => {
        this.currentUser = res;
      });
    }
  }

  async getTeams(): Promise<void> {
    const quizId = +this.route.snapshot.paramMap.get('id');
    await this.userService.getTeamsByQuizId(quizId).then( res => {
      this.teams = res;
    });
  }

  async removeTeam(team: Team): Promise<void> {
    await this.userService.deleteTeam(team.teamId);
  }

  goBack(): void {
    this.location.back();
  }

}
