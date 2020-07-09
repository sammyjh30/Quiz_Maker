import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from '../chat/chat.service';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { PasswordComponent } from './components/password/password.component';
import { UsernameComponent } from './components/username/username.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// services
import { AuthService } from './services/auth.service';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { ChatInboxComponent } from './components/chat-inbox/chat-inbox.component';

// Landing Carousal
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { TFquestionComponent } from './components/create-quiz/Questions/tfquestion/tfquestion.component';
import { MultipleChoiceQuestionsComponent } from './components/create-quiz/Questions/multiple-choice-questions/multiple-choice-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
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
    QuizSessionComponent,
    ChatInboxComponent,
    QuizViewComponent,
    TeamViewComponent,
    TeamAddMemberComponent,
    QuizAddTeamComponent,
    TeamJoinComponent,
    AppComponent,
    CarouselComponent,
    LandingPageComponent,
    QuizComponent,
    CreateQuizComponent,
    TFquestionComponent,
    MultipleChoiceQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
