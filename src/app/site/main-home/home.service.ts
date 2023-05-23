import { Injectable } from '@angular/core';
import { AppHttpClient } from '@common/core/http/http.service';
import { StandartResponse } from '@common/core/http/standart-response';
import { map } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: AppHttpClient) {}

  public getPosts() {
    return this.httpClient.get<StandartResponse<Pagination<Post>>>('home').pipe(map((res) => res.data));
  }

  public submitPost(data: Post) {
    return this.httpClient.post<Post>('posts', data);
  }
}
