import { Component, OnInit,forwardRef, OnDestroy,ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserProfileComponent } from '../userProfile/userProfile.component';

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  form:FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  get emailControl() {
    return this.form.controls.email;
  }

}
