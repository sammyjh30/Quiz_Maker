import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UsernameComponent } from './components/username/username.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { TeamJoinComponent } from './components/team-join/team-join.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';

// Import canActivate guard services
import { AuthGuard } from "./guard/auth.guard";
import { SecureInnerPagesGuard } from "./guard/secure-inner-pages.guard";

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/signedIn', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'log-in', component: LogInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'quiz-session', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'quiz-session/:id/:teamId', component: QuizSessionComponent, canActivate: [AuthGuard] },
  { path: 'quiz-session/:id', component: QuizSessionComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'quiz/:id', component: QuizViewComponent, canActivate: [AuthGuard] },
  { path: 'team/:id', component: TeamViewComponent, canActivate: [AuthGuard] },
  { path: 'join', component: TeamJoinComponent, canActivate: [AuthGuard] },
  { path: 'username', component: UsernameComponent },
  { path: 'signedIn', component: LandingpageComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'createQuiz', component: CreateQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
