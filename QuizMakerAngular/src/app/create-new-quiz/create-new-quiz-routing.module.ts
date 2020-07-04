import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewQuizComponent } from './create-new-quiz.component';

const routes: Routes = [
  { path: '', component: CreateNewQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewQuizRoutingModule { }
