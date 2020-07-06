import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../models/quiz';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quiz: Quiz = {
    quizId: 1,
    hostId: 'abc',
    quizName: 'The Best Quiz',
    startDateTime: new Date(Date.now())
  };

  teams: Team[] = [{
    teamId: 1,
    teamName: 'The best',
    quizId: 1,
    teamScore: 1000000,
  }, {
    teamId: 2,
    teamName: 'Second best',
    quizId: 1,
    teamScore: 50000,
  }, {
    teamId: 3,
    teamName: 'Worse!',
    quizId: 1,
    teamScore: 0,
  }, {
    teamId: 4,
    teamName: 'Equal',
    quizId: 2,
    teamScore: 100000,
  }, {
    teamId: 5,
    teamName: 'The same',
    quizId: 2,
    teamScore: 100000,
  }]

  constructor() { }

  getQuiz(quizId: number): Observable<Quiz> {
    return of(this.quiz);
  }

  getTeams(quizId: number): Observable<Team[]> {
    return of(this.teams.filter(team => team.quizId == quizId));
  }

  removeTeam(team: Team): Observable<Team> {
    throw new Error("Method not implemented.");
  }

  addTeam(email: string): Observable<Team> {
    throw new Error("Method not implemented.");
  }

  isUserPartOfQuiz(email: string, quizId): Observable<boolean> {
    throw new Error("Method not implemented.");
  }

}
