import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    /**
   * Método para obtener de la API Restful una
   * lista de expertos que pintar en la pantalla
   */
     obtenerListaExpertos(): Observable<any> {
      return this.http.get('http://localhost:8080/api/experts');
    }
}
