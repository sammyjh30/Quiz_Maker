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

  pswChangeForm: FormGroup;
  isSubmitted  =  false;
  selectedFile: File
  constructor(private _location: Location,private formBuilder: FormBuilder,private router: Router) { }

  get formControls() { return this.pswChangeForm.controls; }

  ngOnInit(): void {
    this.pswChangeForm  =  this.formBuilder.group({
      password: ['', Validators.required],
      Newpassword: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
  });
  }

  changePassword(data){
    console.log(this.pswChangeForm.value);
    console.log(data.password);
    console.log(data. Newpassword);
    console.log(data.ConfirmPassword);
    this.isSubmitted = true;
    if(this.pswChangeForm.invalid){
      return;
    }
    //this.router.navigateByUrl('/admin');
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
