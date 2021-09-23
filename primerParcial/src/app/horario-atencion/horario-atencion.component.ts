import { Component, OnInit } from '@angular/core';
import { HorarioAtencion } from '../model/horario_atencion';
import { ServiceHorarioAtencionService } from '../service/service-horario-atencion.service';

@Component({
  selector: 'app-horario-atencion',
  templateUrl: './horario-atencion.component.html',
  styleUrls: ['./horario-atencion.component.css']
})
export class HorarioAtencionComponent implements OnInit {
  horarioAtencion: HorarioAtencion[] = [];
  constructor(private servicioHorario: ServiceHorarioAtencionService) { }

  ngOnInit(): void {
    this.servicioHorario.getHorarios().subscribe(
      entity => this.horarioAtencion = entity.lista,
      error =>console.log('no se pudieron conseguir los horarios')
      );
  }

}
