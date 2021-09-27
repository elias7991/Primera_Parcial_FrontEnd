/* modulo de animaciones  */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { CategoriaComponent } from './categoria/categoria.component';
import { ServicecategoriaService } from './service/servicecategoria.service';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
/* importacion de modulos de material para utilziarlos en el HTML */

/* Modulo tarjetas */
import { MatCardModule } from '@angular/material/card'
/* Modulo de formulario */
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSliderModule } from '@angular/material/slider';

/*
  Tener en cuenta que cada vez que importamos un modulo 
  de material debemos de agregarlo al "imports" de @NgModule
*/
=======
import { HorarioAtencionComponent } from './horario-atencion/horario-atencion.component';
import { ServiceHorarioAtencionService } from './service/service-horario-atencion.service';
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';
>>>>>>> ef966cfd4fcfc02f2271d099c362fa0e715b0de0

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HorarioAtencionComponent,
    CategoriaAgregarComponent
>>>>>>> ef966cfd4fcfc02f2271d099c362fa0e715b0de0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    /* módulo de animaciones */
    BrowserAnimationsModule,
    /*Modulo para tarjeta*/
    MatCardModule,
    /* modulo de formulario */
    MatFormFieldModule,
    MatSliderModule,
=======
    FormsModule,
>>>>>>> ef966cfd4fcfc02f2271d099c362fa0e715b0de0
  ],
  providers: [ServicecategoriaService, ServiceHorarioAtencionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
