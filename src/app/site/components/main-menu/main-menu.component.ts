import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { ButtonService } from '@common/services/button.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public auth:AuthService, public buttonService: ButtonService)
  
  { }

  ngOnInit(): void {
    console.log(this.auth)
  }

  onButtonClick(): void {
    const buttonName = "button";
    this.buttonService.setButtonName(buttonName);
  }

}
