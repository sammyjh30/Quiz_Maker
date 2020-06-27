import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewQuizRoutingModule } from './create-new-quiz-routing.module';
import { CreateNewQuizComponent } from './create-new-quiz.component';


@NgModule({
  declarations: [CreateNewQuizComponent],
  imports: [
    CommonModule,
    CreateNewQuizRoutingModule
  ]
})
export class CreateNewQuizModule { }
