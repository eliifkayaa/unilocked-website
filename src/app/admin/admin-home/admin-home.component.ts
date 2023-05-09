import { Component, OnInit } from '@angular/core';
import MenuItem from '../models/menu-item';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  public menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/admin/dashboard',
      roles: ['admin'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
