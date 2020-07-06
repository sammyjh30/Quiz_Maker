import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../models/quiz'

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

  constructor() { }

  getQuiz(id: number): Observable<Quiz> {
    return of(this.quiz);
  }

}
