import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewQuizComponent } from './create-new-quiz.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', component: CreateNewQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewQuizRoutingModule { }
