import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.scss']
})
export class ExpertPageComponent implements OnInit {

  // Frase que se obtiene de la API Restful de ChuckNorris
  expert: any = {
    id: '',
    name: '',
    surname: '',
    nif: '',
    cursos: '',
    condiciones: '',
    estado: '',
    disponibilidad: '',
    tags: []
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerLista() {
    this.dataService.obtenerListaExpertos().subscribe((response) => {
      this.expert = response;
    })
  }
}
