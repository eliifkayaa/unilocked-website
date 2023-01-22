import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss'],
})
export class GuestHomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.animate(document.querySelectorAll('.animate'));
    document.body.addEventListener('scroll',()=> {
      this.animate(document.querySelectorAll('.animate'));

    })
  }

  animate(reveals: NodeListOf<Element>) {

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('animationActive');
      } else {
        reveals[i].classList.remove('animationActive');
      }
    }
  }


}
