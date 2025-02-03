import { Component } from '@angular/core';

@Component({
  selector: 'app-quadra-padel',
  standalone: true,
  imports: [],
  templateUrl: './quadra-padel.component.html',
  styleUrl: './quadra-padel.component.scss',
})
export class QuadraPadelComponent {
  meuBooleano = false;
  name = 'teste';

  constructor() {}

  atualizaBoleano(valor: boolean) {
    this.meuBooleano = valor;
  }
}
