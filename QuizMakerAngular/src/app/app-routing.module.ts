import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserProfileComponent } from './userProfile/userProfile.component';


const routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
