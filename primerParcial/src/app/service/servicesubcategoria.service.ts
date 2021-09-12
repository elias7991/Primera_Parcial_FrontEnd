import { Injectable } from '@angular/core';
import { HttpClient } from 'node_modules/@angular/common/http';
import { listaDatos } from '../model/datos';
import { Observable } from "rxjs";
import { SubCategoria } from '../model/sub-categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicesubcategoriaService {

  private api: string="http://181.123.243.5:8080/stock-pwfe/tipoProducto";

  constructor(private http: HttpClient) { }

  getSubCategorias(): Observable<listaDatos<SubCategoria>> {

    return this.http.get<listaDatos<SubCategoria>>(this.api);

  }

}
