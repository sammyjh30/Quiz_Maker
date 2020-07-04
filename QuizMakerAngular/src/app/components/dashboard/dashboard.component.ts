import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { HackermanService } from 'src/app/services/hackerman.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public test: any;

  constructor(public authService: AuthService, public hackermanService: HackermanService) {
    this.hackermanService.testHackerman()
    .subscribe(hero => this.test = hero);
  }

  ngOnInit(): void {
  }

}
