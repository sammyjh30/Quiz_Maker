import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../Models/question';
import { Quiz } from '../Models/quiz';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  link = environment.endpoints.quizEndpoint;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('idToken')}`
    })
  };

  public static questionTypes: any = {
    TF: 1,
    Multi: 2
  };

  constructor(private http: HttpClient) { }

  addQuestionTF(quizId: number, roundNumber: number, questionNumber: number, question: string, correctAnswer: boolean): Promise<any> {
    const data = {
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.TF,
      questionNumber,
      text: question,
      correctAnswer
    };

    return this.http.post(this.link + '/addQuestion', data, this.httpOptions).toPromise();
  }

  addQuestionMultipleChoice(quizId: number, roundNumber: number, questionNumber: number, question: string, rightAnswer: string, wrongAnswer1: string, wrongAnswer2: string, wrongAnswer3: string): Promise<any> {

    const data = {
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.Multi,
      questionNumber,
      text: question,
      rightAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    };

    return this.http.post(this.link + '/addQuestion', data, this.httpOptions).toPromise();
  }

  deleteQuestion(questionId: number): Promise<any> {
    let url = `${this.link}/deleteQuestion/${questionId}`;
    return this.http.delete(url, this.httpOptions).toPromise();
  }

  getQuestionsByQuizId(quizId: number): Promise<Question[]> {
    let url = `${this.link}/getQuestionsByQuizId/${quizId}`;
    return this.http.get<Question[]>(url, this.httpOptions).toPromise();
  }

  getQuestionsByQuestionId(questionId: number): Promise<Question> {
    let url = `${this.link}/getQuestionsByQuestionId/${questionId}`;
    return this.http.get<Question>(url, this.httpOptions).toPromise();
  }

  updateQuestionTF(questionId: number, quizId: number, roundNumber: number, questionNumber: number, question: string, correctAnswer: boolean): Promise<any> { //set the stuff you dont wanna change to null
    const data = {
      questionId,
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.Multi,
      questionNumber,
      text: question,
      correctAnswer
    };
    return this.http.put(this.link + '/updateQuestion', data, this.httpOptions).toPromise();
  }

  updateQuestionMultipleChoice(questionId: number, quizId: number, roundNumber: number, questionNumber: number, question: string, rightAnswer: string, wrongAnswer1: string, wrongAnswer2: string, wrongAnswer3: string): Promise<any> {//set the stuff you dont wanna change to null

    const data = {
      questionId,
      quizId,
      roundNumber,
      questionType: QuizService.questionTypes.Multi,
      questionNumber,
      text: question,
      rightAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    };

    return this.http.put(this.link + '/updateQuestion', data, this.httpOptions).toPromise();
  }

  addQuiz(quizName: string, hostId: string, startDateTime: Date): Promise<any> {

    const data = {
      quizName,
      hostId,
      startDateTime
    };

    return this.http.post(this.link + '/addQuiz', data, this.httpOptions).toPromise();
  }


  deleteQuiz(quizId: number): Promise<any> {
    let url = `${this.link}/deleteQuiz/${quizId}`;
    return this.http.delete(url, this.httpOptions).toPromise();
  }

  getQuizByQuizId(quizId: number): Promise<Quiz> {
    let url = `${this.link}/getQuiz/${quizId}`;
    return this.http.get<Quiz>(url, this.httpOptions).toPromise();
  }

  getQuizByHostId(hostId: string): Promise<Quiz> {
    let url = `${this.link}/getQuizByHostId/${hostId}`;
    return this.http.get<Quiz>(url, this.httpOptions).toPromise();
  }

  updateQuiz(quizId: number, quizName: string, hostId: string, startDateTime: Date): Promise<any> { //set the stuff you dont wanna change to null

    const data = {
      quizId,
      quizName,
      hostId,
      startDateTime
    };

    return this.http.post(this.link + '/updateQuiz', data, this.httpOptions).toPromise();
  }

}
