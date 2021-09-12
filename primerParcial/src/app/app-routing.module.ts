import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaActualizarComponent } from './categoria/categoria-actualizar/categoria-actualizar.component';
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaComponent
  },{
    path: 'nuevacategoria',
    component: CategoriaAgregarComponent
  },{
    path: 'actualizarcategoria',
    component: CategoriaActualizarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
