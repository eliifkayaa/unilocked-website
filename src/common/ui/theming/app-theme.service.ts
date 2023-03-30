import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

   
  private get localStorageAvaible() : boolean {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }

  public get darkMode() : boolean {
    return true
    if (this.localStorageAvaible) {
      return localStorage.getItem('darkMode') === 'true';
    } else {
      return false;
    }
  }

  public set darkMode(value: boolean) {
    if (this.localStorageAvaible) {
      localStorage.setItem('darkMode', value.toString());
    }
  }

  

  constructor() { }
}
