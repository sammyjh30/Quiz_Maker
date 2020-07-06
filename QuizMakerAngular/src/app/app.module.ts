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

// services
import { AuthService } from './services/auth.service';
import { HackermanService } from './services/hackerman.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from "./providers/token-interceptor.service";


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
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
