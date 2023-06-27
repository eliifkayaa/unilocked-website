import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @ViewChild('stepper') stepper : MatStepper

  isim = '';
  soyisim = '';
  mail = '';
  tel = '';
  okul = '';
  bolum = '';

  page = 'category'

  changePage = (page_name) => {
    this.page = page_name
    console.log(this.page)
  }

  public categories = [
    {
      photos : [
        "../../../assets/img/avatar1.png",
        "../../../assets/img/avatar2.png",
        "../../../assets/img/avatar3.png"
      ],
      title : "Öğrenciyim",
      checked : true,
      subtitle: "Kendimi geliştirmek ve benim gibi düşünenler ile birlikte olmak istiyorum."
    },
    {
      photos : [
        "../../../assets/img/teknokent.png",
        "../../../assets/img/turkcell.png",
        "../../../assets/img/avatar4.png"
      ],
      title : "Profesyonelim",
      checked : false,
      subtitle: "Genç yetenekleri keşfetmek, iş ve staj imkanlarını paylaşmak ve alanım hakkında öğrencileri bilgilendirmek istiyorum."
    },
    {
      photos : [
        "../../../assets/img/ieee.png",
        "../../../assets/img/alekted.png",
        "../../../assets/img/arge.png"
      ],
      title : "Topluluğuz",
      checked : false,
      subtitle: "Genç yetenekleri keşfetmek, iş ve staj imkanlarını paylaşmak ve alanım hakkında öğrencileri bilgilendirmek istiyorum."
    },

  ]

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
    private activeRoute: ActivatedRoute,
    public theme: AppThemeService
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
