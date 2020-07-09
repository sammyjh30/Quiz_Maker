import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  questionList: any[] = []

  constructor() { }

  addQuestion(question) {
    this.questionList.push(question);
    console.warn(this.questionList);
  }

  getQuestions() {
    return this.questionList;
  }
}
