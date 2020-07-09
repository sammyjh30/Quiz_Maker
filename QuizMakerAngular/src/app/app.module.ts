import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { TeamAddMemberComponent } from './components/team-add-member/team-add-member.component';
import { QuizAddTeamComponent } from './components/quiz-add-team/quiz-add-team.component';
import { TeamJoinComponent } from './components/team-join/team-join.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    QuizViewComponent,
    TeamViewComponent,
    TeamAddMemberComponent,
    QuizAddTeamComponent,
    TeamJoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
