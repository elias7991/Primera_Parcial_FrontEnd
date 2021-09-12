/* Definicion de clase que alvergará los datos proveidos por la API */
export class Pacientes {
    idPersona!:number;
    nombre!:string;
    apellido!:string;
    /* por si se ingresa con el separador "-" para distinguir */
    telefono!:string;
    email!:string;
    /* por si se ingresa con separadore de miles para distinguir */
    ruc!:string;
    /* para distinguir separador de miles */
    cedula!:string;
    tipoPersona!:string;
    fechaNacimiento!:string;
}