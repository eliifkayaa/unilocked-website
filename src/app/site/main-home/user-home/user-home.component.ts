import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';
import { Observable, map } from 'rxjs';
import { HomeService } from '../home.service';
import { Pagination } from 'src/app/models/pagination';
import { Post } from 'src/app/models/post';
import { FormBuilder } from '@angular/forms';
import { UploadService } from '@common/core/upload/upload.service';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  public posts$: Observable<Pagination<Post>>;


  constructor(
    public auth: AuthService,
    private breakPointObserver: BreakpointObserver,
    public homeService: HomeService,
    public fb: FormBuilder,
    private uploadService:UploadService
  ) {
    this.posts$ = this.getPosts();
  }

  public postForm = this.fb.group({
    text: [''],
  });

  ngOnInit(): void {}

  public getPosts() {
    return this.homeService.getPosts();
  }

  public submitPost() {
    const text = this.postForm.get('text').value;
    const data: Post = {
      text,
      images: [],
    };
    this.homeService.submitPost(data).subscribe((res) => {
      this.posts$ = this.getPosts();
    });
  }


  public testClick() {}

  public isMobile = this.breakPointObserver
    .observe(Breakpoints.Small)
    .pipe(map((result) => result.matches));

  public account1 = {
    image: 'assets/img/acc1.jpeg',
    name: 'Ayşe K.',
    info: 'Teacher',
  };

  public account2 = {
    image: 'assets/img/acc2.jpeg',
    name: 'Roketsan',
    info: 'Şirket • Savunma Sanayi ve Uzay',
  };

  public account3 = {
    image: 'assets/img/acc3.jpeg',
    name: 'Havelsan',
    info: 'Şirket • Savunma ve Bilgi Teknolojileri',
  };

  public account4 = {
    image: 'assets/img/acc4.jpeg',
    name: 'Havelsan',
    info: 'Şirket • Savunma ve Bilgi Teknolojileri',
  };

  public users = [this.account1, this.account2, this.account3];

  public post = {
    user: this.account4,
  };

  public posts = [this.post, this.post, this.post];

  public upload(files:FileList) {
    this.uploadService.upload(files[0]);
  }
}
