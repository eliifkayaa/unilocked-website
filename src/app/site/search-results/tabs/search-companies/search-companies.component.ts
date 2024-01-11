import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { FollowersService } from '@common/services/followers.service';

@Component({
  selector: 'search-companies',
  templateUrl: './search-companies.component.html',
  styleUrls: ['./search-companies.component.scss']
})
export class SearchCompaniesComponent implements OnInit {

  @Input('items') items : any[]

  constructor(public followers:FollowersService,public currentUser:AuthService) { }

  ngOnInit(): void {
  }

}
