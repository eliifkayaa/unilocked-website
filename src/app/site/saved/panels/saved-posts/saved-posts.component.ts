import { PostsService } from './../../../posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saved-posts',
  templateUrl: './saved-posts.component.html',
  styleUrls: ['./saved-posts.component.scss']
})
export class SavedPostsComponent implements OnInit {

  constructor(public postsService : PostsService) { }

  public savedPosts$ = this.postsService.getSavedPosts();

  ngOnInit(): void {
  }


  public account1 = {
    image:"assets/img/acc1.jpeg",
    name:"Ayşe K.",
    info:"Teacher"
  }

  public account2 = {
    image:"assets/img/acc2.jpeg",
    name:"Roketsan",
    info:"Şirket • Savunma Sanayi ve Uzay"
  }

  public account3 = {
    image:"assets/img/acc3.jpeg",
    name:"Havelsan",
    info:"Şirket • Savunma ve Bilgi Teknolojileri"
  }

  public account4 = {
    image:"assets/img/acc4.jpeg",
    name:"Havelsan",
    info:"Şirket • Savunma ve Bilgi Teknolojileri"
  }

  public post = {
    user : this.account4
  }


  public users = [
    this.account1,
    this.account2,
    this.account3
  ]

  public posts = [
    this.post,
    this.post,
    this.post
  ]

}
