import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserProfileComponent } from './userProfile/userProfile.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'userProfile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
