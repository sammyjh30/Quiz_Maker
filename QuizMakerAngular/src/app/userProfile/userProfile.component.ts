import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit {

  pswChangeForm: FormGroup;
  isSubmitted  =  false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

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

}
