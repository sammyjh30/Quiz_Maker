import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User as FireUser } from "firebase/app";

import { Team } from '../../models/team';
import { TeamUser } from '../../models/teamUser';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  currentUser: TeamUser;
  quiz: Quiz;
  team: Team;
  captain: TeamUser;
  teamMembers: TeamUser[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private quizService: QuizService
  ) {
    this.getCurrentUser();
    this.getQuiz();
    this.getTeam();
  }

  ngOnInit() {
  }

  getCurrentUser(): void {
    const fireUser: FireUser = JSON.parse(localStorage.getItem('user'));
    this.userService.getUserByEmailandTeamId(fireUser.email, this.team.teamId)
      .then(user => this.currentUser = user)
      .catch(error => console.log(error));
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuizByQuizId(id)
      .then(quiz => this.quiz = quiz)
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTeam(id)
      .then(team => {
        this.team = team;
        this.getTeamMembers();
      });
  }

  getTeamMembers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTeamMembers(id)
      .then(teamMembers => {
        this.teamMembers = teamMembers.filter(t => t.captain !== true);
        this.captain = teamMembers.find(t => t.captain === true);
      })
      .catch(error => console.log(error));
  }

  removeMember(member: TeamUser): void {
    this.userService.removeMember(member)
      .then(teamMembers => this.teamMembers = teamMembers)
      .catch(error => console.log(error));
  }

  goBack(): void {
    this.location.back();
  }

}
