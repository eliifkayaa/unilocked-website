import { map, pipe } from 'rxjs';
import { AppHttpClient } from '@common/core/http/http.service';
import { Injectable } from '@angular/core';
import { StandartResponse } from '@common/core/http/standart-response';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';
import { AuthService } from '@common/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    public httpClient: AppHttpClient,
    private authService: AuthService
  ) {}

  public getSavedPosts() {
    return this.httpClient
      .get<StandartResponse<Pagination<Post>>>('posts/saved')
      .pipe(map((response) => response.data));
  }

  public savePost(post: Post) {
    return this.httpClient
      .post<StandartResponse<Post>>(`posts/${post._id}/save`)
      .pipe(map((response) => response.data));
  }

  public unsavePost(post: Post) {
    return this.httpClient
      .post<StandartResponse<Post>>(`posts/${post._id}/deletebookmark`)
      .pipe(map((response) => response.data));
  }

  public getPosts() {
    return this.httpClient
      .get<StandartResponse<Pagination<Post>>>('posts')
      .pipe(map((response) => response.data));
  }

  addReaction(post: Post, reaction: string) {
    return this.httpClient
      .post<StandartResponse<Post>>(`posts/${post._id}/${reaction}`)
      .pipe(map((response) => response.data));
  }

  public isSaved(post: Post) {
    return this.authService.user.postsSaved.includes(post._id);
  }
}
