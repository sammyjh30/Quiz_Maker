import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  detailsForm: FormGroup;
  isSubmitted  =  false;
  get formControls() { return this.detailsForm.controls; }
  constructor(private formBuilder: FormBuilder, public userService:UserService) { }

  ngOnInit(): void {
    this.detailsForm  =  this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email:['',Validators.required]
  });
  }

  updateUserProfile(data){

    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.email);

    this.userService.addUser('321',data.firstname,data.lastname,data.email);

  }

}
