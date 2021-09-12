import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaDatos } from '../model/datos';
import { Pacientes } from '../model/pacientes';

@Injectable({
  providedIn: 'root'
})
export class ServicepacientesService {

  /* definimos la direccion url de la api */
  private api: string="http://181.123.243.5:8080/stock-pwfe/persona";

  constructor(private http: HttpClient) { }

  /* definicion de metodo que invoca a la API */
  getPacientes(): Observable<listaDatos<Pacientes>>{
    
    return this.http.get<listaDatos<Pacientes>>(this.api);

  }

}
