import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'pt-expertise',
  imports: [IconComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent implements AfterViewInit {
  @ViewChild('iconAngular', { read: ElementRef }) iconAngular: ElementRef;
  @ViewChild('iconLaptop', { read: ElementRef }) iconLaptop: ElementRef;
  @ViewChild('iconLaptop2', { read: ElementRef }) iconLaptop2: ElementRef;

  isIntersected = false;

  observer: IntersectionObserver | null = null;
  databaseColor: 'white' | 'green' = 'white';

  constructor(private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.setInterceptor();
    this.setAngularAnimation();
    this.setLaptopAnimation();
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

          setTimeout(() => {
            observer.unobserve(this.host.nativeElement);
          }, 1000);
        }
      });
    }, options);

    observer.observe(this.host.nativeElement);
  }

  private setLaptopAnimation() {
    if (this.iconLaptop.nativeElement.style.fill === 'rgb(46, 70, 255)') {
      setTimeout(() => {
        this.iconLaptop.nativeElement.style.fill = 'rgb(255, 255, 255)';
        this.iconLaptop2.nativeElement.style.fill = 'rgb(255, 255, 255)';
        this.databaseColor = 'white';
      });
    } else {
      setTimeout(() => {
        this.iconLaptop.nativeElement.style.fill = '#2e46ff';
        this.iconLaptop2.nativeElement.style.fill = '#2e46ff';
        this.databaseColor = 'green';
      });
    }

    setTimeout(() => {
      this.setLaptopAnimation();
    }, 1500);
  }

  private setAngularAnimation() {
    if (this.iconAngular.nativeElement.style.fill === 'rgb(221, 0, 49)') {
      this.iconAngular.nativeElement.style.fill = 'rgb(255, 255, 255)';
    } else {
      this.iconAngular.nativeElement.style.fill = '#DD0031';
    }

    setTimeout(() => {
      this.setAngularAnimation();
    }, 1500);
  }
}
