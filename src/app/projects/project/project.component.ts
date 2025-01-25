import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'pt-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {
  @Input() heading: string;
  @Input() description: string;
  @Input() videoUrl: string;
  @Input() tags: string[];
  @Input() projectUrl: string;

  @HostListener('click')
  onClick() {
    window.open(this.projectUrl, '_blank');
  }

  @ViewChild('video', { read: ElementRef }) video: ElementRef;

  projectHovered = false;

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.play();
  }
}
