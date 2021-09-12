import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ServicecategoriaService } from './service/servicecategoria.service';
import { CategoriaAgregarComponent } from './categoria/categoria-agregar/categoria-agregar.component';
import { FormsModule } from '@angular/forms';
import { CategoriaActualizarComponent } from './categoria/categoria-actualizar/categoria-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaAgregarComponent,
    CategoriaActualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServicecategoriaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
