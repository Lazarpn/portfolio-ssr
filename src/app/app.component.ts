import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
  selector: 'pt-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showLoadingSpinner = true;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.onStable.subscribe(() => {
      this.showLoadingSpinner = false;
    });
  }
}
