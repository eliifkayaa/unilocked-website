import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss'],
})
export class GuestHomeComponent implements OnInit, AfterViewInit , OnChanges{
  @ViewChild('slider', { static: false }) slider: ElementRef<HTMLDivElement>;

  activeDiv = 1;

  public changeActive = (id) => {
    this.activeDiv = id
  }


  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {


    // document.body.addEventListener('scroll', () => {
    //   this.animate(document.querySelectorAll('.animate'));
    // });

  }

  private slideCount = 0;
   ngAfterViewInit(): void {

    // setTimeout(() => {
    //   this.animate(document.querySelectorAll('.animate'));
    // })

    // setInterval(() => {
    //   this.nextSlide();
    // }, 5000);
  }

    ngOnChanges(): void {

  }

  // nextSlide() {
  //   this.slideCount++;
  //   this.slider.nativeElement.scrollTo(window.innerWidth * this.slideCount, 0);

  //   if (this.slideCount > 3) {
  //     this.slideCount = -1;
  //   }
  // }

  // prevSlide() {
  //   this.slideCount--;
  //   this.slider.nativeElement.scrollTo(window.innerWidth * this.slideCount, 0);

  //   if (this.slideCount < 0) {
  //     this.slideCount = 4;
  //   }
  // }

  // animate(reveals: NodeListOf<Element>) {
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 10;
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add('animationActive');
  //     } else {
  //       reveals[i].classList.remove('animationActive');
  //     }
  //   }



  // }

  // public getCount(index: number) {
  //   return (this.animatedCounts[index]);
  // }

  // private intToString(value) {
  //   var suffixes = ['', 'k', 'm', 'b', 't'];
  //   var suffixNum = Math.floor(('' + value).length / 3);
  //   var shortValue: any = parseFloat(
  //     (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
  //       2
  //     )
  //   );
  //   if (shortValue % 1 != 0) {
  //     shortValue = shortValue.toFixed(1);
  //   }
  //   return shortValue + suffixes[suffixNum];
  // }
}
