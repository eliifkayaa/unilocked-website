import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {


  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
