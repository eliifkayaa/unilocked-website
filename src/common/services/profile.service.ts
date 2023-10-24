import { Injectable } from '@angular/core';
import { AppHttpClient } from '@common/core/http/http.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: AppHttpClient) {}

  public getUserProfile(username: string) {
    return this.http.get<any>('user-profile/' + username).pipe(
      map((response) => {
        const data = response.data;
        data.job = data.university.name + ' ' + data.department.name + " Bölümü";
        data.info = "500+ Bağlantı • Ankara, Türkiye"
        data.projects = {
          completed: data.projects,
          inProgress: data.projects,
        }
        return data
      })
    );
    
  }
}
