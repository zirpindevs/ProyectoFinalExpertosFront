import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Expert } from 'src/app/models/expert/expert.model';



@Component({
  selector: 'app-expert-create-page',
  templateUrl: './expert-create-page.component.html',
  styleUrls: ['./expert-create-page.component.scss']
})
export class ExpertCreatePageComponent implements OnInit {

  experts: any = {
    id: '',
    name: '',
    nif: '',
    telefono: '',
    email: '',
    direccion: '',
    puntuacion: '',
    cursos: '',
    condiciones: '',
    estado: '',
    disponibilidad: '',
    createDate: '',
    lastUpdate: '',
    tags: []
  };

  name: string;
  registerForm: FormGroup = new FormGroup({})

  loading: boolean = false;
  errorMessage = "";

  constructor(private dataService: DataService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    // Before the Login Component Renders, we create our RegisterForm
    // with the Form Builder
    this.registerForm = this.formBuilder.group({
      // Here we define the FormControls with the default value
      name: '',
      nif: '',
      disponibilidad: '',
      estado: '',
      valoracion: '',
      telefono: '',
      correo: '',
      direccion: '',
      etiqueta: '',
      observaciones: '',
      estadoMotivo: ''
    });
  }

  returnBack() {
    this.location.back();
  }


  addExperto() {
    this.experts.name = this.registerForm.value.name;
    this.experts.nif = this.registerForm.value.nif;
    this.experts.disponibilidad = this.registerForm.value.disponibilidad;
    this.experts.estado = this.registerForm.value.estado;
    this.experts.puntuacion = this.registerForm.value.valoracion;
    this.experts.telefono = this.registerForm.value.telefono;
    this.experts.correo = this.registerForm.value.correo;
    this.experts.direccion = this.registerForm.value.direccion;
    this.experts.observaciones = this.registerForm.value.observaciones;
    this.experts.estadoMotivo = this.registerForm.value.estadoMotivo;

    this.dataService.crearExperto(this.experts);
  }
}
