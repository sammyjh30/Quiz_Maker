import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MailerService } from 'src/app/services/mailer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private mailerService: MailerService
  ) {
    mailerService.sendTestEmail();
  }

  ngOnInit() { }

}
