import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';
import { TFquestionComponent } from './Questions/tfquestion/tfquestion.component';
import { MultipleChoiceQuestionsComponent } from './Questions/multiple-choice-questions/multiple-choice-questions.component';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quizForm;
  created = false;
  showChoice = false;
  quizId: number;
  enterTF = false;
  enterMulti = false;
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public quizService: QuizService) {
    this.quizForm = this.formBuilder.group({
      quizName: '',
      startDateTime: '',
    });
  }

  ngOnInit(): void {

  }


  onSubmit(formdata) {
    this.quizService.addQuiz(formdata.quizName, this.authService.userData.uid, formdata.startDateTime).then((data) => {
      this.quizId = data.quizId;
      this.created = true;
      this.showChoice = true;
    }).catch((err) => {
      console.log(err);
    });

  }

  addTFQuestion(formdata): void {
    this.quizService.addQuestionTF(this.quizId, formdata.roundNumber, formdata.questionNumber, formdata.question, formdata.answer).then((data) => {
      this.showChoice = true;
      this.enterMulti = false;
      this.enterTF = false;
    }).catch((err) => {
      console.log(err);
    })
  }

  addMultipleChoiceQuestion(formdata): void {
    this.quizService.addQuestionMultipleChoice(this.quizId, formdata.roundNumber, formdata.questionNumber, formdata.question, formdata.answer, formdata.wrongAnswer1, formdata.wrongAnswer2, formdata.wrongAnswer3).then((data) => {
      this.showChoice = true;
      this.enterMulti = false;
      this.enterTF = false;
    }).catch((err) => {
      console.log(err);
    })


  }

  showMultiple(): void {
    this.showChoice = false;
    this.enterMulti = true;
    this.enterTF = false;
  }

  showTF(): void {
    this.showChoice = false;
    this.enterMulti = false;
    this.enterTF = true;
  }




}
