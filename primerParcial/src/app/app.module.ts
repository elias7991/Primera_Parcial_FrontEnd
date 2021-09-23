import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { CategoriaComponent } from './categoria/categoria.component';
import { ServicecategoriaService } from './service/servicecategoria.service';
import { HorarioAtencionComponent } from './horario-atencion/horario-atencion.component';
import { ServiceHorarioAtencionService } from './service/service-horario-atencion.service';
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    HorarioAtencionComponent,
    CategoriaAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServicecategoriaService, ServiceHorarioAtencionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
