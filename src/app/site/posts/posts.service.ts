import { map, pipe } from 'rxjs';
import { AppHttpClient } from '@common/core/http/http.service';
import { Injectable } from '@angular/core';
import { StandartResponse } from '@common/core/http/standart-response';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public httpClient:AppHttpClient) { }

  public getSavedPosts() {
    return this.httpClient.get<StandartResponse<Pagination<Post>>>('posts/saved').pipe(
      map(response => response.data)
    );
  }

}
