import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/Livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private API: string = 'http://localhost:8080/api/livros';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + '/');
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API + '/', livro);
  }

  update(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(this.API + '/' + livro.id, livro);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
