import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';


/* Aqui vamos agregando los paths (nombre de los componentes) de los componentes que vamos creando */
const routes: Routes = [{
  path: 'categoria',
  component: CategoriaComponent
},
{
  path: 'sub-categoria',
  component: SubCategoriaComponent
},
{
  path: 'pacientes',
  component: PacientesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
