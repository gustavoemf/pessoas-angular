import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistemas/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './components/pessoas/pessoasdetails/pessoasdetails.component';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livros/livrosdetails/livrosdetails.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: IndexComponent,
    children: [
      { path: 'pessoas', component: PessoaslistComponent },
      { path: 'pessoas/novo', component: PessoasdetailsComponent },
      { path: 'pessoas/editar/:id', component: PessoasdetailsComponent },
      { path: 'livros', component: LivroslistComponent },
      { path: 'livros/novo', component: LivrosdetailsComponent },
      { path: 'livros/editar/:id', component: LivrosdetailsComponent },
      { path: 'carros', component: CarroslistComponent },
      { path: 'carros/novo', component: CarrosdetailsComponent },
      { path: 'carros/editar/:id', component: CarrosdetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
