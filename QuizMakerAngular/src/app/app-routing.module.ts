import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "./guard/auth.guard";
import { SecureInnerPagesGuard } from "./guard/secure-inner-pages.guard";
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';
import { TeamViewComponent } from './components/team-view/team-view.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'quiz/:id', component: QuizViewComponent, canActivate: [AuthGuard] },
  { path: 'team/:id', component: TeamViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
