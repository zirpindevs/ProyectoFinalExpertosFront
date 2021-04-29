import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../models/etiqueta/etiqueta.model';
import { Expert } from '../models/expert/expert.model';


//const baseURLTag = 'https://proyectofinal123456.herokuapp.com/api/etiquetas';
const baseURLTag = 'http://localhost:8080/api/etiquetas';


const headers = new Headers;
const body = JSON.stringify(
{
title: "data"
});
headers.append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }


findAllTags(): Observable<any> {
  headers.append('Access-Control-Allow-Origin', '*');
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
 return this.http.delete(baseURLTag+'/'+id);
}


 deleteArticle(id: number) {
  const httpParams = new HttpParams().set('id', String(id));
  const options = { params: httpParams };
  return new Promise((res, rej) => {
    this.http.delete(baseURLTag, options)
      .subscribe((serverResponse: any) => {
      });
  });
 }



 deleteArticle2(etiquetaId: number, expert: Expert): Promise<Array<Expert>> {
  let empHeaders = new Headers({ 'Content-Type': 'application/json' });
  return this.http.put(`${baseURLTag}`, JSON.stringify(expert))
  .toPromise()
  .then(response => response as Expert[])
  .catch(this.handleError);
  }




crearEtiqueta(name: String): Observable<Etiqueta> {
  return this.http.post<Etiqueta>(baseURLTag, name);
  }


handleError(error: any): Promise<Array<any>> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
   }

}
