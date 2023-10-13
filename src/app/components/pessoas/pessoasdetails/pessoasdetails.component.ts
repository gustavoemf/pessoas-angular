import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss'],
})
export class PessoasdetailsComponent {
  @Input() pessoa!: Pessoa;
  @Output() retorno = new EventEmitter<Pessoa>();

  service = inject(PessoasService);

  constructor() {}

  save() {
    this.service.save(this.pessoa).subscribe({
      next: (pessoa) => {
        this.retorno.emit(pessoa);
      },
      error: (erro) => {
        alert(
          'ERRO SAVE PESSOAS DETAILS'
        );
        console.log(erro);
      },
    });
  }
}
