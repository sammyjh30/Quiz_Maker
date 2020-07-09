import { Injectable, NgZone } from '@angular/core';
import { User as FireUser, auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

import { UserService } from './user.service';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  token: any;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private userService: UserService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        user.getIdToken().then(idToken => {
          localStorage.setItem("idToken", idToken)
        });
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Log in with email/password
  LogIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['signedIn']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign up with email/password
  SignUp(email: string, password: string, firstName: string, lastName: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        let user: User = {
          name: firstName,
          surname: lastName,
          email: email,
          userId: result.user.uid
        }
        this.SetUserData(user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        let fUser: FireUser = result.user;
        let user: User = {
          name: fUser.displayName.split(" ", 2)[0],
          surname: fUser.displayName.split(" ", 2)[1],
          email: fUser.email,
          userId: fUser.uid
        }
        this.SetUserData(user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: User): void {
    this.userService.addUser(user.userId, user.name, user.surname, user.email)
      .then(message => console.log(message))
      .catch(error => console.log(error));
  }

  UpdateUserData(user: User): void {
    this.userService.updateUser(user.userId, user.name, user.surname, user.email)
      .then(message => console.log(message))
      .catch(error => console.log(error));
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['log-in']);
    })
  }

}
