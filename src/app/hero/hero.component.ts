import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

import Typewriter from 'typewriter-effect/dist/core';

import { ButtonComponent } from '../shared/button/button.component';
import { TagComponent } from '../shared/components/tag/tag.component';

@Component({
  selector: 'pt-hero',
  imports: [ButtonComponent, TagComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('name', { read: ElementRef }) name: ElementRef;
  @ViewChild('nameMobile', { read: ElementRef }) nameMobile: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit(): void {
    const typewriter = new Typewriter(this.name.nativeElement, {
      loop: false,
      delay: 50
    });

    typewriter.typeString(`Lazar Stojanovic`).start();

    const typewriterMobile = new Typewriter(this.nameMobile.nativeElement, {
      loop: false,
      delay: 50
    });

    typewriterMobile.typeString(`Lazar Stojanovic`).start();
  }

  sendEmail() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = 'mailto:lazarst.pn@gmail.com';
    }
  }
}
