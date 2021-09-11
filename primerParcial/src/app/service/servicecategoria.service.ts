import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaDatos } from '../model/datos';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicecategoriaService {
  private api: string = 'http://181.123.243.5:8080/stock-pwfe/categoria'
  constructor(private http: HttpClient) { }
  getCategorias(): Observable<listaDatos<Categoria>> {
    return this.http.get<listaDatos<Categoria>>(this.api)
  }
}
