import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Inicio de Sesión de usuario';

  public formLogin: FormGroup = new FormGroup({});
  //el FormBuilder hace referencia al modulo ReactiveFormModule
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //se construye un grupo de entradas 
    //uno es el username y el otro el password
    this.formLogin = this.formBuilder.group({
      //**********FALTA AGREGAR EL SERVICIO**********
      nombre: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]],
    });    

  }
  //metodo a llamar al presionar el boton de tipo submit
  send(): any{
    console.log(this.formLogin.value)
  }

}