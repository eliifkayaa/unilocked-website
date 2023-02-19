import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  constructor(private http:HttpClient) {}

  public get<T>(key: string, def: T | string = ''): T | string {
    return def;
  }

  public save(val: any) {
    return this.http.post('',{});
  }
}
