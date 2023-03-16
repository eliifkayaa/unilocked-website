import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss','../panel.scss']
})
export class AccountSettingsComponent implements OnInit {

  public personalInfoForm = this.fb.group({
    first_name: [this.auth.user.first_name, Validators.required],
    last_name: ['', Validators.required],
    gender: ['', Validators.required,],
    country: [''],
    city: ['']
  });

  public accountInfoForm = this.fb.group({
    phone_number: [''],
  });

  public passwordForm = this.fb.group({
    old_password: ['', Validators.required],
    new_password: ['', Validators.required],
    new_password_confirm: ['', Validators.required,],
  });

  public get emails() {
    return this.accountInfoForm.controls["emails"] as FormArray;
  }

  constructor(public fb:FormBuilder,public auth:AuthService) { }

  ngOnInit(): void {
    
  }

  public submitPersonalInfo() {

  }

  public submitAccountInfo() {

  }

  public changePassword() {
    
  }
}
