import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuadraPadelComponent } from './components/quadra-padel/quadra-padel.component';

export const routes: Routes = [
  {
    path: '',
    component: QuadraPadelComponent,
  },
];
