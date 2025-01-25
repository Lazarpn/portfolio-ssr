import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Typewriter from 'typewriter-effect/dist/core';

import { ButtonComponent } from '../shared/button/button.component';
import { TagComponent } from '../shared/components/tag/tag.component';

@Component({
  selector: 'pt-contact',
  imports: [ButtonComponent, TagComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('name', { read: ElementRef }) name: ElementRef;

  isIntersected = false;
  observer: IntersectionObserver | null = null;

  constructor(private host: ElementRef) { }

  ngAfterViewInit(): void {
    this.setInterceptor();
  }

  sendEmail() {
    window.location.href = 'mailto:lazarst.pn@gmail.com';
  }

  phoneContact() {
    window.location.href = 'tel:+381 61 29 87 606';
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
          const typewriter = new Typewriter(this.name.nativeElement, {
            loop: false,
            delay: 50
          });

          typewriter.typeString(`Spectacular!`).start();
          this.isIntersected = true;
        }
      });
    }, options);

    observer.observe(this.host.nativeElement);
  }
}
