import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { Router } from  '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  Form:FormGroup;
  openform=false;
 
  constructor(private _location: Location,private formBuilder: FormBuilder,private router: Router) {

   }

  ngOnInit(): void {
    this. profileForm  =  this.formBuilder.group({
      password: [],
      username: []
  });
  this.Form = this.formBuilder.group({

  });

  }

  back(){
    console.log("return to root");
    this._location.back();
  }

  onClickOpenForm(){
    this.openform=true;
    return this.openform;
  
    }

}
