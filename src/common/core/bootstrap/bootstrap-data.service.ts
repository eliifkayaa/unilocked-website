import { Injectable } from '@angular/core';
import { AppHttpClient } from '../http/http.service';
import { User } from '@common/auth/types/user';

@Injectable({
  providedIn: 'root'
})
export class BootstrapDataService {

  constructor(private http:AppHttpClient) { }

  public init() {
    return this.http.get<{
      success:boolean,
      data: {
        user:User,
        settings:any,
      }
    }>('bootstrap-data');
  }
}
