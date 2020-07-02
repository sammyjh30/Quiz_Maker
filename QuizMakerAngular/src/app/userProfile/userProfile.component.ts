import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  usernameForm:FormGroup;
  isSubmitted  =  false;
  selectedFile: File
  constructor(private _location: Location,private formBuilder: FormBuilder,private router: Router) {
    this.profileForm = this.formBuilder.group({
      password: [],
      username: []
    });
   }

  get formControls() { return this. profileForm.controls; }

  ngOnInit(): void {
    this. profileForm  =  this.formBuilder.group({
      password: [],
      username: []
  });

  }

  changePassword(data){
    console.log(this. profileForm.value);
    console.log(data.password);
    console.log(data.ConfirmPassword);
    this.isSubmitted = true;
    if(this. profileForm.invalid){
      return;
    }
    //this.router.navigateByUrl('/admin');
  }

  username(data){

    console.log(data.username);
  }


  back(){
    console.log("return to root");
    this._location.back();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
  }

}
