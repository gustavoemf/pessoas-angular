import { Carro } from './../../../models/Carro';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'],
})
export class CarrosdetailsComponent {
  @Input() carro!: Carro;
  @Output() retorno = new EventEmitter<Carro>();

  service = inject(CarrosService);

  constructor() {}

  save() {
    this.service.save(this.carro).subscribe({
      next: (carro) => {
        this.retorno.emit(carro);
      },
      error: (erro) => {
        alert('ERRO SAVE CARROS DETAILS');
        console.log(erro);
      },
    });
  }
}
