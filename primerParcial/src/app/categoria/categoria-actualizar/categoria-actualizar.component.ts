import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { ServicecategoriaService } from 'src/app/service/servicecategoria.service';

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent implements OnInit {

  categoria: Categoria = new Categoria();
  mensaje: string = "";
  constructor(private servicioCategoria: ServicecategoriaService) { }
  ngOnInit(): void {
  }
  guardar(): void{
    this.servicioCategoria.actualizarCategoria(this.categoria).subscribe(
      () => {
        this.mensaje='Actualizado exitosamente'
      },
      error => console.log("error: "+error)
    );
  }

}
