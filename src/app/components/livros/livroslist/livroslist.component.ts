import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/models/Livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss'],
})
export class LivroslistComponent {
  data: Livro[] = [];
  selected: Livro = new Livro();

  modal = inject(NgbModal);
  service = inject(LivrosService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.service.listAll().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (erro) => {
        alert('ERRO LIST ALL');
        console.log(erro);
      },
    });
  }

  create(modal: any) {
    this.selected = new Livro();

    this.modal.open(modal, { size: 'lg' });
  }

  update(modal: any, livro: Livro) {
    this.selected = Object.assign({}, livro);

    this.modal.open(modal, { size: 'lg' });
  }

  addOrUpdate(calivrorro: Livro) {
    this.listAll();
    this.modal.dismissAll();
  }

  delete(livro: Livro) {
    if (confirm('Você tem certeza que deseja excluir esse registro?')) {
      this.service.delete(livro.id).subscribe(
        () => {
          this.listAll();
        },
        (error) => {
          console.error('ERRO AO EXCLUIR', error);
        }
      );
    }
  }
}
