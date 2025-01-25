import { Component, HostListener, Input } from '@angular/core';

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
    window.open(this.projectUrl, '_blank');
  }

  projectHovered = false;

}
