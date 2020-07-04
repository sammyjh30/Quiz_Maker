export class Question {
    constructor(question, correctAnswer, options?) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.options = options;
    }

    question: string;
    correctAnswer: string;
    options?: string[]
}