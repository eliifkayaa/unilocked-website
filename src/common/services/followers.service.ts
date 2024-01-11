import { Injectable } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { AppHttpClient } from '@common/core/http/http.service';
import { map } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class FollowersService {
  constructor(private http: AppHttpClient, private auth: AuthService) {}

  public getFollowers(profileId: string) {
    return this.http.get('followers', { profileId });
  }

  public getAvaibleChatUsers() {
    return this.http
      .post<{ success: boolean; data: Pagination<any> }>(
        'followers/avaible-chat-users',
        {
          profileId: this.auth.currentProfile._id,
          profileType: this.auth.currentProfile.modelType,
        }
      )
      .pipe(map((response) => response.data));
  }

  public toggle(
    profileId: string,
    profileType: string,
    followerId: string,
    followerType: string
  ) {
    return this.http.post('followers/toggle', {
      profileId,
      profileType,
      followerId,
      followerType,
    });
  }
}
