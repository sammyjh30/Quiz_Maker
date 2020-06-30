import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { CreateNewQuizRoutingModule } from './create-new-quiz-routing.module';
import { CreateNewQuizComponent } from './create-new-quiz.component';
import { from } from 'rxjs';
import { Form1Component } from './form1/form1.component';


@NgModule({
  declarations: [CreateNewQuizComponent, Form1Component],
  imports: [
    ReactiveFormsModule,
    MatRadioModule,
    CommonModule,
    CreateNewQuizRoutingModule
  ]
})
export class CreateNewQuizModule { }
