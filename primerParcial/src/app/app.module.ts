/* modulo de animaciones  */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ServicecategoriaService } from './service/servicecategoria.service';
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

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* módulo de animaciones */
    BrowserAnimationsModule,
    /*Modulo para tarjeta*/
    MatCardModule,
    /* modulo de formulario */
    MatFormFieldModule,
    MatSliderModule,
  ],
  providers: [ServicecategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
