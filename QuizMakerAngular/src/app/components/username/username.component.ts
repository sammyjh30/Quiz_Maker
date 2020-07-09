import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  detailsForm: FormGroup;
  isSubmitted  =  false;
  get formControls() { return this.detailsForm.controls; }
  constructor(private formBuilder: FormBuilder, 
              public userService:UserService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.detailsForm  =  this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email:['',Validators.required]
  });
  }

  updateUserProfile(data){
    console.log(this.authService.userData.uid );
    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.email);

    this.userService.updateUser(this.authService.userData.uid ,data.firstname,data.lastname,data.email);

  }

}
