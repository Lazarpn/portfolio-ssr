import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'pt-experience-block',
  imports: [],
  templateUrl: './experience-block.component.html',
  styleUrl: './experience-block.component.scss'
})
export class ExperienceBlockComponent implements AfterViewInit {
  @Input() title: string;
  @Input() description: string;

  @ViewChild('text', { read: ElementRef }) text: ElementRef;

  filled = 0;
  maxFill: number;

  isIntersected = false;
  observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.setInterceptor();
  }

  setInterceptor() {
    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersected = true;
          this.typeText();

          setTimeout(() => {
            observer.unobserve(this.host.nativeElement);
          }, 1000);
        }


      });
    }, options);

    observer.observe(this.host.nativeElement);
  }

  typeText() {
    const typewriter = new Typewriter(this.text.nativeElement, {
      loop: false,
      delay: 100
    });

    typewriter.typeString(`${this.title}`).start();
  }
}
