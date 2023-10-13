import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/Carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private API: string = 'http://localhost:8080/api/carros';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/');
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API + '/', carro);
  }

  update(carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(this.API + '/' + carro.id, carro);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
