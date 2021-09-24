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
import { LoginComponent } from './login/login.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importaciones de material design
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    SubCategoriaComponent,
    PacientesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
  ],
  /* en providers se agregan los servicios creados en app/service */
  providers: [ServicecategoriaService, ServicesubcategoriaService, ServicepacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
