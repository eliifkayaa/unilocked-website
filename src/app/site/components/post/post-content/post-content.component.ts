import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  @Input('content') content : string

  public get parsedContent() {
    return this.content.split(' ');
  }

  public isHashtag(word) {
    return word.startsWith('#');
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
