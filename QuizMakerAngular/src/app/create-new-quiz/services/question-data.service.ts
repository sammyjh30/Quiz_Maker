import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Question } from '../model/Question'

@Injectable()
export class QuestionDataService {
    private numberOfRoundsSource = new BehaviorSubject(1);
    private questionNumberSource = new BehaviorSubject(1);
    private roundNumberSource = new BehaviorSubject(1);
    private questions: Question[] = [];

    currentNumberOfRounds = this.numberOfRoundsSource.asObservable();
    currentQuestionNumber = this.questionNumberSource.asObservable()
    currentRoundNumber = this.roundNumberSource.asObservable();

    constructor() { }

    changeNumberOfRounds(numberOfRounds: number) {
        this.numberOfRoundsSource.next(numberOfRounds);
    }

    changeQuestionNumber() {
        let questionNumber = this.questionNumberSource.getValue() + 1; 
        this.questionNumberSource.next(questionNumber);
    }

    changeRoundNumber() {
        let roundNumber = this.roundNumberSource.getValue() + 1;
        this.roundNumberSource.next(roundNumber);
    }

    addQuestion(question: Question) {
        this.questions.push(question);
    }
}