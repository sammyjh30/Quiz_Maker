import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './userProfile/userProfile.component';
//import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { UsernameComponent } from './username/username.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


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
    UserProfileComponent,
    //UsernameComponent,
    PasswordComponent,
    UsernameComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    AsideComponent,
    PrivacyPolicyComponent,
    LandingpageComponent,
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
