import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Expert} from "../models/expert/expert.model"
import { Etiqueta } from '../models/etiqueta/etiqueta.model';

const baseURL = 'https://proyectofinal1234.ddns.net:8080/api/expertos';
//const baseURL = 'https://localhost:8080/api/expertos';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

    /**
   * Método para obtener de la API Restful una
   * lista de expertos que pintar en la pantalla
   */
    //  obtenerListaExpertos(): Observable<any> {
    //    console.log(this.http.get('http://localhost:8080/api/experts'));
    //   return this.http.get('http://localhost:8080/api/experts');
    // }



  getAll(params: any): Observable<any> {
      return this.http.get<any>(baseURL, { params });
    }

  findAll(nombre: string, tamano :number): Observable<any> {
      //  return this.http.get(baseURL + '?nombre='+nombre+'&tamano=' + String(limite));
      return this.http.get(baseURL + '?tamano=' + String(tamano));

      //  return this.http.get(baseURL);

  }

  findAllEstado(estado: string, limite :number): Observable<any> {
    return this.http.get(baseURL + '?estado='+estado+'&tamano=' + String(limite));
   //  return this.http.get(baseURL);
  }

    searchById(id: number): Observable<any> {
      return this.http.get(`${baseURL}/${id}`);
    }


    deleteExpertById(id: number): Observable<any> {
      return this.http.delete(`${baseURL}/${id}`);
    }

    crearExperto(expertToCreate: Expert){
      const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

      return this.http.post<any>(baseURL, expertToCreate,
      {        headers: headers,
      })
      .subscribe((res) => console.log(res));
      }


    crearEtiquetaUsuario(expert: Expert, addEtiqueta: string){
      const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

      const body=JSON.stringify("etiqueta "+addEtiqueta);
      const params = new HttpParams()
      .append('id', String(expert.id));

      return this.http.put<any>(baseURL+'/'+expert.id, body,
      {        headers: headers,
      })
      .subscribe((res) => console.log(res));
      }


      modificarUsuario(modifiedExpert: Expert){
        const headers = new HttpHeaders().append(
        'Content-Type',
        'application/json'
      );

      const params = new HttpParams()
        .append('id', String(modifiedExpert.id));

        return this.http.put<any>(baseURL+'/'+modifiedExpert.id, modifiedExpert,
        {        headers: headers,
        })
        .subscribe((res) => console.log(res));
        }


    AddTag(expert: Expert, etiqueta: Etiqueta): Promise<Array<Expert>> {
      let empHeaders = new Headers({ 'Content-Type': 'application/json' });
      return this.http.post(`${baseURL}`, JSON.stringify(expert))
      .toPromise()
      .then(response => response as Expert[])
      .catch(this.handleError);
      }

    update(id: number, data: any): Observable<any> {
      return this.http.put(`${baseURL}/${id}`, data);
    }

    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }
}
