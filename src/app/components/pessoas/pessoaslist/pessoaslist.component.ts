import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss'],
})
export class PessoaslistComponent{
  data: Pessoa[] = [];
  selected: Pessoa = new Pessoa();

  modal = inject(NgbModal);
  service = inject(PessoasService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.service.listAll().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (erro) => {
        alert(
          'ERRO LIST ALL'
        );
        console.log(erro);
      },
    });
  }

  create(modal: any) {
    this.selected = new Pessoa();

    this.modal.open(modal, { size: 'lg' });
  }

  update(modal: any, pessoa: Pessoa) {
    this.selected = Object.assign({}, pessoa);

    this.modal.open(modal, { size: 'lg' });
  }

  addOrUpdate(pessoa: Pessoa) {
    this.listAll();
    this.modal.dismissAll();
  }

  delete(pessoa: Pessoa) {
    if (confirm('Você tem certeza que deseja excluir esse registro?')) {
      this.service.delete(pessoa.id).subscribe(
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
