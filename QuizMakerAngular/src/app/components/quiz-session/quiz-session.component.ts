import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  quizId: string;

  constructor(
    private route: ActivatedRoute, 
    public authService: AuthService) { 

    this.route.params.subscribe( params => {
      console.log(params);
      this.quizId = params.id;
    });
  }

  ngOnInit(): void {
    if (this.authService.userData != null) {
      console.log(this.authService.userData.displayName);
    } else {
      console.log("No user")
    }
  }

}
