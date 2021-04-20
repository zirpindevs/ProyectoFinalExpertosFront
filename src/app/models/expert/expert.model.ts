import {IExpert} from './iexpert.interface';

export class Expert implements IExpert{
    id: number;
    name: string;
    surname: string;
    nif: string;
    telefono: number;
    email: string;
    direccion: string;
    condiciones: number;
    cursos: string;
    estado: string;
    disponibilidad: string;
    createdDeDate: string;
    puntuacion: string;

    constructor(id: number, name: string, surname: string, nif: string, condiciones: number, cursos: string, estado: string,
       disponibilidad: string,createdDeDate: string, telefono: number, email: string, direccion: string, puntuacion: string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.nif = nif;
    this.telefono = telefono;
    this.email = email;
    this.direccion = direccion;
    this.puntuacion = puntuacion;
    this.condiciones = condiciones;
    this.cursos = cursos;
    this.estado = estado;
    this.disponibilidad = disponibilidad;
    this.createdDeDate = createdDeDate;
    }
}
