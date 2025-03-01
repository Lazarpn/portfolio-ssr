import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'pt-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() heading: string;
  @Input() description: string;
  @Input() videoUrl: string;
  @Input() tags: string[];
  @Input() projectUrl: string;

  @HostListener('click')
  onClick() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.projectUrl, '_blank');
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  projectHovered = false;
}
