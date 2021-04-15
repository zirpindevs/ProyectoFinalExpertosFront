import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.scss']
})
export class ExpertPageComponent implements OnInit {

  experts: any = {
    id: '',
    name: '',
    surname: '',
    nif: '',
    cursos: '',
    condiciones: '',
    estado: '',
    disponibilidad: '',
    createDate: '',
    tags: []
  };

  name = '';
  currentexpert = null;
  message = '';
  // experts = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerLista() {
    this.dataService.findAll().subscribe((experts: any)=>{
      console.log(experts);
      this.experts = experts;
    })
  }

  buscarPorId(): void {
    this.dataService.searchById(this.name)
      .subscribe(
        experts => {
          this.experts = experts;
          console.log(experts);
        },
        error => {
          console.log(error);
        });
  }
}
