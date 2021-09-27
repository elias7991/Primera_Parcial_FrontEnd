import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HorarioAtencionComponent } from './horario-atencion/horario-atencion.component';

const routes: Routes = [{
  path: 'categoria',
  component: CategoriaComponent
},
{
  path: 'horario_atencion',
  component: HorarioAtencionComponent
},
{
  path: 'categoria_nuevo',
  component: CategoriaAgregarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
