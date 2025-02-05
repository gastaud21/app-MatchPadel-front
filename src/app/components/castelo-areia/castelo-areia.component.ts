import { Component } from '@angular/core';

@Component({
  selector: 'app-castelo-areia',
  standalone: true,
  imports: [],
  templateUrl: './castelo-areia.component.html',
  styleUrl: './castelo-areia.component.scss',
})
export class CasteloAreiaComponent {
  meuBooleano = false;
  name = 'teste';

  constructor() {}

  atualizaBoleano(valor: boolean) {
    this.meuBooleano = valor;
  }
}
