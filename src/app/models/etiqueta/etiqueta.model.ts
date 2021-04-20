import {IEtiqueta} from './ietiqueta.interface';

export class Etiqueta implements IEtiqueta {
    id: string;
    name: string;
    createdDeDate: String;

    constructor(id: string, name: string,createdDeDate: String){
    this.id = id;
    this.name = name;
    this.createdDeDate = createdDeDate;
    }
}
