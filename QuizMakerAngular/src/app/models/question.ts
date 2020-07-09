export interface Question {
  questionId: number;
  quizID: number;
  roundNumber: number;
  questionType: number;
  questionNumber: number;
  question: string;
  correntAnswer?: boolean;
  rightAnswer?: string;
  wrongAnswer1?: string;
  wrongAnswer2?: string;
  wrongAnswer3?: string;
}
