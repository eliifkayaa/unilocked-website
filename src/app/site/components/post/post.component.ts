import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { Post } from 'src/app/models/post';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input('post') post: Post;

  constructor(public postService: PostsService) {}

  public isSaved: boolean;


  ngOnInit(): void {
    this.isSaved = this.postService.isSaved(this.post);
  }

  public savePost() {
    this.postService.savePost(this.post).subscribe((post) => {
      this.isSaved = true;
    });
  }

  public unsavePost() {
    this.postService.unsavePost(this.post).subscribe((post) => {
      this.isSaved = false;
    });
  }

  public addReaction(reaction) {
    this.postService
      .addReaction(this.post, reaction)
      .subscribe((post) => {
        this.post.reactionsCounts = post.reactionsCounts;
      });
    
  }

}
