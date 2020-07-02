




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})

export class PasswordComponent implements OnInit {

  pswChangeForm: FormGroup;
  usernameForm:FormGroup;
  isSubmitted  =  false;
  selectedFile: File
  constructor(private _location: Location,private formBuilder: FormBuilder,private router: Router) { }

  get formControls() { return this.pswChangeForm.controls; }

  ngOnInit(): void {
    this.pswChangeForm  =  this.formBuilder.group({
      password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
  });
  this.usernameForm =  this.formBuilder.group({
    email: ['', Validators.required]

});
  }

  changePassword(data){
    console.log(this.pswChangeForm.value);
    console.log(data.password);9
    console.log(data.ConfirmPassword);
    this.isSubmitted = true;
    if(this.pswChangeForm.invalid){
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

