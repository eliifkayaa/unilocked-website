import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss'],
})
export class GuestHomeComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false }) slider: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.animate(document.querySelectorAll('.animate'));
    document.body.addEventListener('scroll', () => {
      this.animate(document.querySelectorAll('.animate'));
    });
  }

  private slideCount = 0;
  ngAfterViewInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.slideCount++;
    this.slider.nativeElement.scrollTo(window.innerWidth * this.slideCount, 0);

    if (this.slideCount > 3) {
      this.slideCount = -1;
    }
  }

  prevSlide() {
    this.slideCount--;
    this.slider.nativeElement.scrollTo(window.innerWidth * this.slideCount, 0);


    if (this.slideCount < 0) {
      this.slideCount = 4;
    }
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
