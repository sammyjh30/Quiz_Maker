import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class QuizService {
  private static link = 'http://localhost:3000';
  public static questionTypes: any = {
    TF: 1,
    Multi: 2
  };

  constructor(private http: HttpClient) { }



  addQuestionTF(quizId: number, roundNumber: number, questionNumber: number, text: string, correctAnswer: boolean): Promise<any> {
    const data = {
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.Multi,
      questionNumber,
      text,
      correctAnswer
    };

    return this.http.post(QuizService.link + '/addQuestion', data).toPromise();
  }

  addQuestionMultipleChoice(quizId: number, roundNumber: number, questionNumber: number, text: string, rightAnswer: string, wrongAnswer1: string, wrongAnswer2: string, wrongAnswer3: string): Promise<any> {

    const data = {
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.Multi,
      questionNumber,
      text,
      rightAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    };

    return this.http.post(QuizService.link + '/addQuestion', data).toPromise();
  }

  deleteQuestion(questionId: number): Promise<any> {
    const data = { questionId: questionId.toString() };
    return this.http.delete(QuizService.link + '/deleteQuestion', { params: data }).toPromise();
  }

  getQuestionsByQuizId(quizId: number): Promise<any> {
    const data = { quizId: quizId.toString() };
    return this.http.get(QuizService.link + '/getQuestions', { params: data }).toPromise();
  }

  addQuiz(quizName: string, hostId: number, startDateTime: Date): Promise<any> {

    const data = {
      quizName,
      hostId,
      startDateTime
    };

    return this.http.post(QuizService.link + '/addQuiz', data).toPromise();
  }


  deleteQuiz(quizId: number): Promise<any> {
    const data = { quizId: quizId.toString() };
    return this.http.delete(QuizService.link + '/deleteQuiz', { params: data }).toPromise();
  }

  getQuizByQuizId(quizId: number): Promise<any> {
    const data = { quizId: quizId.toString() };
    return this.http.get(QuizService.link + '/getQuiz', { params: data }).toPromise();
  }

  getQuizByHostId(hostId: number): Promise<any> {
    const data = { hostId: hostId.toString() };
    return this.http.get(QuizService.link + '/getQuizByHostId', { params: data }).toPromise();
  }

}
