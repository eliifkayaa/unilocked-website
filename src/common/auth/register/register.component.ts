import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @ViewChild('stepper') stepper : MatStepper

  public firstFormGroup = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({
    password: ['', Validators.required],
    password2: ['', Validators.required],
  });
  public error: string;

  public needEmailConfirmation: boolean = false;

  constructor(
    public auth: AuthService,
    private _formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      const data = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
      };
      this.auth
        .register(
          data.email,
          data.firstname,
          data.lastname,
          data.password,
          data.password2
        )
        .subscribe({
          next: (response) => {
            this.needEmailConfirmation = response.needEmailConfirmation;
          },
          error: (error) => {
            this.error = error;
          },
          complete: () => {
            this.stepper.next()
          },
        });
    }
  }
}
