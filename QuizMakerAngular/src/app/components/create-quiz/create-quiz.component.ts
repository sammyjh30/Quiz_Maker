import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quizForm;
  constructor(private formBuilder: FormBuilder, public authService: AuthService, public quizService: QuizService) {
    this.quizForm = this.formBuilder.group({
      quizName: '',
      startDateTime: '',
      // hostId: this.authService.userData.uid
    });
  }

  ngOnInit(): void {

  }


  onSubmit(formdata) {
    console.log(formdata)
    this.quizService.addQuiz(formdata.quizName, this.authService.userData.uid, formdata.startDateTime).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err);
    });
  }




}
