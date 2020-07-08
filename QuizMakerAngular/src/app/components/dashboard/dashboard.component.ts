import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MailerService } from "../../services/mailer.service";

import { Email } from '../../models/email';
import { TeamUser } from 'src/app/models/teamUser';
import { Quiz } from 'src/app/models/quiz';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
