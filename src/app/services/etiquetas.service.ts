import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseURLTag = 'http://localhost:8080/api/etiquetas';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http: HttpClient) { }


findAllTags(){
    return this.http.get(baseURLTag);
}

searchTagById(id: number): Observable<any> {
 return this.http.get(`${baseURLTag}/${id}`);
}


deleteTagById(id: number): Observable<any> {
 return this.http.delete(`${baseURLTag}/${id}`);
}

}
