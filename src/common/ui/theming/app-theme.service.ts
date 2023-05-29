import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

  public changed$ = new BehaviorSubject<boolean>(this.darkMode); 
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
    
    if (this.localStorageAvaible) {
      return localStorage.getItem('darkMode') === 'true';
    } else {
      return false;
    }
  }

  public set darkMode(value: boolean) {
    if (this.localStorageAvaible) {
      localStorage.setItem('darkMode', value.toString());
      this.changed$.next(value);
    }
  }

  

  constructor() { }
}
