import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  meuBooleano = false;
  name = 'teste';

  constructor() {}

  atualizaBoleano(valor: boolean) {
    this.meuBooleano = valor;
  }
}
