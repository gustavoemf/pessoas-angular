import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from 'src/app/models/Livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss'],
})
export class LivrosdetailsComponent {
  @Input() livro!: Livro;
  @Output() retorno = new EventEmitter<Livro>();

  service = inject(LivrosService);

  constructor() {}

  save() {
    this.service.save(this.livro).subscribe({
      next: (livro) => {
        this.retorno.emit(livro);
      },
      error: (erro) => {
        alert('ERRO SAVE LIVROS DETAILS');
        console.log(erro);
      },
    });
  }
}
