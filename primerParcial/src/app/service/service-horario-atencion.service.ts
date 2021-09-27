import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaDatos } from '../model/datos';
import { HorarioAtencion } from '../model/horario_atencion';

@Injectable({
  providedIn: 'root'
})
export class ServiceHorarioAtencionService {
  private api: string ="http://181.123.243.5:8080/stock-pwfe/personaHorarioAgenda";
  constructor(private http: HttpClient) { }
  getHorarios(): Observable<listaDatos<HorarioAtencion>> {
    return this.http.get<listaDatos<HorarioAtencion>>(this.api);
  }
   
}
