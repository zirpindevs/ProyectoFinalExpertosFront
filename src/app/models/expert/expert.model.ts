export class Expert {
    id: number;
    name: string;
    surname: string;
    nif: string;
    condiciones: number;
    cursos: string;
    estado: string;
    disponibilidad: string;
    createdDeDate: String;

    constructor(id: number, name: string, surname: string, nif: string, condiciones: number, cursos: string, estado: string,
       disponibilidad: string,createdDeDate: String){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.nif = nif;
    this.condiciones = condiciones;
    this.cursos = cursos;
    this.estado = estado;
    this.disponibilidad = disponibilidad;
    this.createdDeDate = createdDeDate;
    }
}
