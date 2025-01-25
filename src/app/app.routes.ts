import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  {
    path: 'pocetna',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
];
