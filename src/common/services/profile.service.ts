import { Injectable } from '@angular/core';
import { AppHttpClient } from '@common/core/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: AppHttpClient) {}

  public getUserProfile(username: string) {
    return this.http.get<any>('user-profile/' + username);
  }
}
