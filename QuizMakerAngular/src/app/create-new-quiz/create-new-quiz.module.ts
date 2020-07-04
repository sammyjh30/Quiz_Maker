import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { CreateNewQuizRoutingModule } from './create-new-quiz-routing.module';
import { CreateNewQuizComponent } from './create-new-quiz.component';
import { from } from 'rxjs';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { TrueFalseComponent } from './components/true-false/true-false.component';


@NgModule({
  declarations: [
    CreateNewQuizComponent, 
    Form1Component, 
    Form2Component, MultipleChoiceComponent, TrueFalseComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatRadioModule,
    CommonModule,
    CreateNewQuizRoutingModule
  ]
})
export class CreateNewQuizModule { }
