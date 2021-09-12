import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ServicecategoriaService } from './service/servicecategoria.service';
import { ServicesubcategoriaService } from './service/servicesubcategoria.service';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ServicepacientesService } from './service/servicepacientes.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    SubCategoriaComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  /* en providers se agregan los servicios creados en app/service */
  providers: [ServicecategoriaService, ServicesubcategoriaService, ServicepacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
