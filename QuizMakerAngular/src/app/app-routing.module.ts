import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserProfileComponent } from './userProfile/userProfile.component';
import { MainComponent } from './main/main.component';
import { UsernameComponent } from './username/username.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingpageComponent },
  { path: 'userProfile', component: UserProfileComponent },
  {path:'username',component:UsernameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
