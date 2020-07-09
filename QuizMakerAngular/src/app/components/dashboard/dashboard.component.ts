import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { HackermanService } from 'src/app/services/hackerman.service';

//new quiz
import { STEP_ITEMS } from '../../constants/new-quiz-form'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public test: any;

  //new quiz
  formContent: any;
  formData: any;
  activeStepIndex: number;

  constructor(public authService: AuthService, public hackermanService: HackermanService) {
    this.hackermanService.testHackerman()
    .subscribe(hero => this.test = hero);

  }

  ngOnInit(): void {
        //new quiz
        this.formContent = STEP_ITEMS;
        this.formData = {};
  }

  //new quiz
  onFormSubmit(formData: any): void {
    this.formData = formData;
    // ...
    
  }

}
