import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaDatos } from '../model/datos';
import { Categoria } from '../model/categoria';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicecategoriaService {
  private api: string = 'http://181.123.243.5:8080/stock-pwfe/categoria'
  constructor(private http: HttpClient) { }
  getCategorias(): Observable<listaDatos<Categoria>> {
    return this.http.get<listaDatos<Categoria>>(this.api)
  }
  agregarCategoria(c: Categoria): Observable<Categoria> {
    return this.http
      .post<Categoria>(this.api, c)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
    
  }
  actualizarCategoria(c: Categoria): Observable<Categoria> {
    return this.http
    .put<Categoria>(this.api, c)
    .pipe(
      tap(
        data => console.log('actualizado '+data),
        error => console.log("error: "+error)
      )
    );
  }
}
