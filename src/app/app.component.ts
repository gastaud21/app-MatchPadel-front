import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuadraPadelComponent } from './components/quadra-padel/quadra-padel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, HomeComponent, QuadraPadelComponent],
  imports: [QuadraPadelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nome-do-projeto';
  constructor() {}
}
