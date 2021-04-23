import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { EtiquetasService } from 'src/app/services/etiquetas.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';



import { Expert } from 'src/app/models/expert/expert.model';
import { Etiqueta } from 'src/app/models/etiqueta/etiqueta.model';

@Component({
  selector: 'app-expert-detail-page',
  templateUrl: './expert-detail-page.component.html',
  styleUrls: ['./expert-detail-page.component.scss']
})
export class ExpertDetailPageComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({})


  // ID of the Expert, that comes from the URL Parms
  idExpert: string = '';

  expert: any;
  listatagsSelected : string;
  Listatags: any;
  tags: any = {
    id: '',
    name: '',
    createDate: '',
  };

  loading: boolean = false;
  errorMessage = "";

    // Datos que vienen expert-page
    @Input() ExpertDetails = {
        id: '',
        name: '',
        surname: '',
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
    }

    noName: string;
    pagina: number;

    // Emisor de eventos que ejecutará un método en el padre
    @Output() cambiarContacto: EventEmitter<Expert> = new EventEmitter<Expert>();

  /**
   * Constructor
   * @param activatedRoute --> The Active Route in that moment
   * @param router --> To navigate to another route
   */
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private dataService: DataService,
       private etiquetaService: EtiquetasService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {

      // 1. We capture the ID from the Params

      this.idExpert = this.activatedRoute.snapshot.params.id;

      this.obtenerUsuario(this.idExpert);
      this.obtenerListaEtiquetas();

      this.registerForm = this.formBuilder.group({
        // Here we define the FormControls with the default value
        name: '',
        surname: '',
        nif: '',
        disponibilidad: '',
        estado: '',
        valoracion: '',
        telefono: '',
        correo: '',
        direccion: ''
      });
      }

      returnBack() {
        this.location.back();
      }

    // Evento capturado en el Hijo que emite hacia el Padre
    // Enviará al padre, el contacto para que actualice datos
    actualizar() {
      this.expert.name = this.registerForm.value.name;
      this.expert.surname = this.registerForm.value.surname;
      this.expert.nif = this.registerForm.value.nif;
      this.expert.disponibilidad = this.registerForm.value.disponibilidad;
      this.expert.estado = this.registerForm.value.estado;
      this.expert.puntuacion = this.registerForm.value.valoracion;
      this.expert.telefono = this.registerForm.value.telefono;
      this.expert.correo = this.registerForm.value.correo;
      this.expert.direccion = this.registerForm.value.direccion;

      console.log(this.expert);


      //this.cambiarContacto.emit(this.expert);
    }

    obtenerUsuario(id:any) {
        this.dataService.searchById(Number(id.substr(1))).subscribe((response)=>{
        this.expert = response;
        this.tags = this.expert.tags;
      },
      (error) => {                              //error() callback
        console.error('Request expert failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request expert completed')      //This is actually not needed
        this.loading = false;
      })
    }

    obtenerListaEtiquetas(){
        this.noName = "";
        this.pagina = 500;
        this.etiquetaService.findAllTagsWithFilter(this.noName, this.pagina).subscribe((response)=>{
        this.Listatags = response;
        console.log(this.Listatags);
      },
      (error) => {                              //error() callback
        console.error('Request tag failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request tag completed')      //This is actually not needed
        this.loading = false;
      })
    }

    borrarEtiquetaxperto(tagToDelete: any){
      this.etiquetaService.deleteTagById(Number(tagToDelete.id)).subscribe(() => console.log("tag user deleted"));;
      alert(" "+tagToDelete.name+" Tarea borrada!");
    }

    crearEtiquetaExperto(listatagsSelected: string) {
        this.dataService.crearEtiquetaUsuario(this.expert, listatagsSelected)
      }



  }
