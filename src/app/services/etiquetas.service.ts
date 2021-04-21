import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../models/etiqueta/etiqueta.model';


const baseURLTag = 'http://localhost:8080/api/etiquetas';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }



findAllTags(): Observable<any> {
    return this.http.get(baseURLTag);
}

findAllTagsWithFilter(name: string, limite :number): Observable<any> {
  return this.http.get(baseURLTag + '?nombre='+name+'&limite=' + String(limite));
 //  return this.http.get(baseURL);

}

searchTagById(id: number): Observable<any> {
 return this.http.get(`${baseURLTag}/${id}`);
}


deleteTagById(id: number): Observable<any> {
 return this.http.delete(`${baseURLTag}/${id}`);
}


crearEtiqueta(etiqueta: Etiqueta): Promise<Array<Etiqueta>> {
  let empHeaders = new Headers({ 'Content-Type': 'application/json' });
  return this.http.post(`${baseURLTag}`, JSON.stringify(etiqueta))
  .toPromise()
  .then(response => response as Etiqueta[])
  .catch(this.handleError);
  }


  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

}
