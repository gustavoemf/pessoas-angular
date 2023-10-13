import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  private API: string = 'http://localhost:8080/api/pessoas';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + '/');
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API + '/', pessoa);
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.API + '/' + pessoa.id, pessoa);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
