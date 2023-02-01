import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit ,AfterViewInit{

  public reversed = false
  public firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,private activeRoute:ActivatedRoute) {

  }

  ngOnInit(): void {



  }

  ngAfterViewInit(): void {
    this.reversed = this.activeRoute.snapshot.queryParams['from'] == 'home'
  }



  reverse() {
    this.reversed = true
  }

}
