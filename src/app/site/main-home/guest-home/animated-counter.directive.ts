import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animatedCounter],[animationStarted]',
})
export class AnimatedCounterDirective implements OnInit {
  @Input() animatedCounter = 0;
  @Input() animationStarted = false;

  constructor(private el: ElementRef) {}
  speed = 500;

  ngOnInit(): void {
    this.animate();
  }

  animate() {
    if (this.animationStarted) {
      const data = +this.el.nativeElement.innerText;

      const time = this.animatedCounter / this.speed;
      if (data < this.animatedCounter) {
        this.el.nativeElement.innerText = Math.ceil(data + time);
        setTimeout(this.animate.bind(this), 1);
      } else {
        this.el.nativeElement.innerText = this.animatedCounter;
      }
    } else {
      setTimeout(this.animate.bind(this), 1);
    }
  }
}
