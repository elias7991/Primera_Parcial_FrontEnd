import { Component, OnInit } from '@angular/core';
/* Es necesario importar la clase Pacientes para instanciarla aqui */
import { Pacientes } from '../model/pacientes';
import { ServicepacientesService } from '../service/servicepacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  /*variable que contiene la lista de pacientes*/
  pacientes: Pacientes[] = [];

  constructor(private servicioPacientes: ServicepacientesService) { }

  ngOnInit(): void {

    this.servicioPacientes.getPacientes().subscribe(
      entity => this.pacientes = entity.lista,
      error => console.log("No ha sido posible conseguir la lista de pacientes")
    ) 

  }

}
