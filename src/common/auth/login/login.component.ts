import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterContentInit {
  @ViewChild('stepper') stepper: MatStepper;
  public reversed = false;
  public firstFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
  });


  constructor(
    public auth:AuthService,
    private _formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public theme:AppThemeService
  ) {}
  ngOnInit(): void {
    this.reverseByRegister();
  }

  ngAfterViewChecked(): void {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.reverseByHome();
    }, 100);
  }

  public saveEmail() {}

  ngAfterViewInit(): void {}

  public submit() {
    const data = { ...this.firstFormGroup.value, ...this.secondFormGroup.value }
    this.auth.login(data.email, data.password)
  }

  reverseByHome() {
    this.reversed = this.reversed ||
      this.activeRoute.snapshot.queryParams['from'] == 'home' ||
      this.activeRoute.snapshot.queryParams['from'] == 'register';
  }

  reverseByRegister() {
    this.reversed = this.activeRoute.snapshot.queryParams['from'] != 'home';
  }
}
