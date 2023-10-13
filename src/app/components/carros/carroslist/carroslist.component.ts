import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from 'src/app/models/Carro';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss'],
})
export class CarroslistComponent {
  data: Carro[] = [];
  selected: Carro = new Carro();

  modal = inject(NgbModal);
  service = inject(CarrosService);

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
    this.selected = new Carro();

    this.modal.open(modal, { size: 'lg' });
  }

  update(modal: any, carro: Carro) {
    this.selected = Object.assign({}, carro);

    this.modal.open(modal, { size: 'lg' });
  }

  addOrUpdate(carro: Carro) {
    this.listAll();
    this.modal.dismissAll();
  }

  delete(carro: Carro) {
    if (confirm('Você tem certeza que deseja excluir esse registro?')) {
      this.service.delete(carro.id).subscribe(
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
