import { Component, OnInit } from '@angular/core';
import { SubCategoria } from '../model/sub-categoria';
import { ServicesubcategoriaService } from '../service/servicesubcategoria.service';

@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.css']
})
export class SubCategoriaComponent implements OnInit {

  /*aqui la lista de subcategorias*/
  sub_categorias: SubCategoria[] = [];
  constructor(private serviciosubcategoria: ServicesubcategoriaService) { }

  ngOnInit(): void {

    /* Invocamos al servicio */
    this.serviciosubcategoria.getSubCategorias().subscribe(
      entity => this.sub_categorias = entity.lista,
      error => console.log("No fue posible adquirir las sub categorias")
    );

  }

}
