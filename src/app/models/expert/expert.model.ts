import {IExpert} from './iexpert.interface';

export class Expert implements IExpert{
    id: number;
    nombre: string;
    nif: string;
    telefono: number;
    email: string;
    direccion: string;
    condiciones: number;
    cursos: string;
    estado: string;
    correo: String;
    observaciones:String;
    estadoMotivo: String;
    disponibilidad: string;
    createdDeDate: string;
    lastUpdate: String;
    puntuacion: string;




    constructor(id: number, nombre: string, nif: string, condiciones: number, cursos: string, estado: string, disponibilidad: string,
      correo: string, observaciones: string, estadoMotivo: string, createdDeDate: string, telefono: number, email: string, direccion: string, puntuacion: string, lastUpdate: String){
    this.id = id;
    this.nombre = nombre;
    this.nif = nif;
    this.telefono = telefono;
    this.email = email;
    this.direccion = direccion;
    this.puntuacion = puntuacion;
    this.condiciones = condiciones;
    this.cursos = cursos;
    this.estado = estado;
    this.correo = correo;
    this.observaciones = observaciones;
    this.estadoMotivo = estadoMotivo;
    this.disponibilidad = disponibilidad;
    this.createdDeDate = createdDeDate;
    this.lastUpdate = lastUpdate;
    }
}
