import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Expert} from "../models/expert/expert.model"


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http//localhost:8080/api/experts';

  constructor(private http: HttpClient) { }

    /**
   * Método para obtener de la API Restful una
   * lista de expertos que pintar en la pantalla
   */
    //  obtenerListaExpertos(): Observable<any> {
    //    console.log(this.http.get('http://localhost:8080/api/experts'));
    //   return this.http.get('http://localhost:8080/api/experts');
    // }

  findAll(){
       return this.http.get('http://localhost:8080/api/experts');
  }

  findByName(name: String){
    return this.http.get('http://localhost:8080/api/experts/name');
  }

  searchByName(name: String): Observable<any> {
    return this.http.get(`http://localhost:8080/api/experts/name/${name}`);
  }

  createEmployee(expert: Expert): Promise<Array<Expert>> {
    let empHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8080/api/experts/', JSON.stringify(expert))
    .toPromise()
    .then(response => response as Expert[])
    .catch(this.handleError);
    }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
}
