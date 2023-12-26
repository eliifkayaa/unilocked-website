import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@common/auth/auth.service';
import { GlobalSearchService } from '@common/services/global-search.service';
import { AppThemeService } from '@common/ui/theming/app-theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  public categories = [
    {
      photos: [
        '../../../assets/img/avatar1.png',
        '../../../assets/img/avatar2.png',
        '../../../assets/img/avatar3.png',
      ],
      title: 'Öğrenciyim',
      checked: true,
      subtitle:
        'Kendimi geliştirmek ve benim gibi düşünenler ile birlikte olmak istiyorum.',
    },
    {
      photos: [
        '../../../assets/img/teknokent.png',
        '../../../assets/img/turkcell.png',
        '../../../assets/img/avatar4.png',
      ],
      title: 'Profesyonelim',
      checked: false,
      subtitle:
        'Genç yetenekleri keşfetmek, iş ve staj imkanlarını paylaşmak ve alanım hakkında öğrencileri bilgilendirmek istiyorum.',
    },
    {
      photos: [
        '../../../assets/img/ieee.png',
        '../../../assets/img/alekted.png',
        '../../../assets/img/arge.png',
      ],
      title: 'Topluluğuz',
      checked: false,
      subtitle:
        'Genç yetenekleri keşfetmek, iş ve staj imkanlarını paylaşmak ve alanım hakkında öğrencileri bilgilendirmek istiyorum.',
    },
  ];

  public firstFormGroup = this._formBuilder.group({});
  public secondFormGroup = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    receiveNotifications: [false],
    acceptPolicies: [false, Validators.requiredTrue],
  });
  public thirdFormGroup = this._formBuilder.group({
    school: ['', Validators.required],
    department: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });
  public fourthFormGroup = this._formBuilder.group({
    about: ['', Validators.required],
  });
  public error: string;

  public needEmailConfirmation: boolean = false;

  public filteredSchools = new BehaviorSubject<string[]>([]);
  public filteredDepartments = new BehaviorSubject<string[]>([]);


  constructor(
    public auth: AuthService,
    private _formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public theme: AppThemeService,
    public searchService: GlobalSearchService
  ) {}

  ngOnInit(): void {
    this.thirdFormGroup.get('school').valueChanges.subscribe((value) => {
      this.searchService.searchSchools(value).subscribe((response) => {
        this.filteredSchools.next(response.data.universities.map((x) => x.name));
      });
    });
    this.thirdFormGroup.get('department').valueChanges.subscribe((value) => {
      this.searchService.searchDepartments(value).subscribe((response) => {
        this.filteredDepartments.next(response.data.departments.map((x) => x.name));
      });
    });
  }

  submit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      const data = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
        ...this.fourthFormGroup.value,
      };
      this.auth.register(data).subscribe({
        next: (response) => {
          this.needEmailConfirmation = response.needEmailConfirmation;
        },
        error: (error) => {
          this.error = error;
        },
        complete: () => {
          this.stepper.next();
        },
      });
    }
  }
}
