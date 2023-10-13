import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  router = inject(Router);

  usuario: Usuario = new Usuario();

  validaLogin() {
    if (this.usuario.login == 'admin' && this.usuario.senha == 'admin') {
      this.router.navigate(['/admin/pessoas']);
    } else alert('Credenciais inválidas');
  }
}
