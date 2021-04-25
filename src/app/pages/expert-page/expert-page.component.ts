import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert.model';


@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.scss']
})
export class ExpertPageComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'estado', 'etiquetas', 'puntuacion', 'actions'];
  dataSource :MatTableDataSource<Expert>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  experts: any = {
    id: '',
    nombre: '',
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

  id = 0;
  currentexpert = null;
  message = '';
  // experts = [];

  loading: boolean = false;
  errorMessage = "";


  currentExpert?: Expert;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSizes = [5, 10, 25];

  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(private dataService: DataService, private router: Router, private location: Location) {

    //const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    this.obtenerLista("");

    //  this.dataSource = new MatTableDataSource(this.experts);
   }

  ngOnInit(): void {

    this.retrieveExperts();

    this.dataSource = new MatTableDataSource(this.experts);


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getRequestParams(buscaNombre: string, page: number, pageSize: number): any {
    let params: any = {};

    if (buscaNombre) {
      params[`nombre`] = buscaNombre;
    }

    if (page) {
      params[`pagina`] = page - 1;
    }

    if (pageSize) {
      params[`tamano`] = pageSize;
    }

    return params;
  }

  retrieveExperts(): void {
    const params = this.getRequestParams(this.experts.nombre, this.page, this.pageSize);

    this.dataService.getAll(params)
    .subscribe(
      response => {
        const { experts, totalItems } = response;
        this.experts = experts;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }


  handlePageEvent(event: PageEvent) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.obtenerLista(this.dataSource.filter);
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveExperts();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveExperts();
  }

  filtrarNombre(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    console.log(this.dataSource.filter);
    this.obtenerLista(this.dataSource.filter);
  }


  filtrarEstado(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
    console.log(this.dataSource.filter);
    this.obtenerListaEstado(this.dataSource.filter);
  }

  returnBack() {
    this.location.back();
  }

  // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerLista(filter_name :string) {
    this.dataService.findAll(filter_name, this.pageSize).subscribe((response)=>{
      console.log('response received')
      console.log(response);
      console.log(response.currentPage);

      this.experts = response.currentPage;
      this.pageSize = response.totalItems;

      //count number of objects
      let count = 0;
        for (const key in this.experts){
        if (this.experts.hasOwnProperty(key)) {
          count++;
        }

        // this.length = count;
      }

    },
    (error) => {                              //error() callback
      console.error('Request failed with error')
      this.errorMessage = error;
      this.loading = false;
    },
    () => {                                   //complete() callback
      console.error('Request completed')      //This is actually not needed
      this.loading = false;
    })
  }


  obtenerListaEstado(filter_estado :string) {
    this.dataService.findAllEstado(filter_estado, this.pageSize).subscribe((response)=>{
      console.log('response received')
      console.log(response);
      this.experts = response;

      //count number of objects
      let count = 0;
        for (const key in this.experts){
        if (this.experts.hasOwnProperty(key)) {
          count++;
        }

        // this.length = count;
      }
    },
    (error) => {                              //error() callback
      console.error('Request failed with error')
      this.errorMessage = error;
      this.loading = false;
    },
    () => {                                   //complete() callback
      console.error('Request completed')      //This is actually not needed
      this.loading = false;
    })
  }

  editContact(expert: Expert) {
    console.log(this.experts.id);
     let route = '/expertos/:';
     this.router.navigate([route], { queryParams: { id: this.experts.id } });
  }

  buscarPorId(): void {
    this.dataService.searchById(this.id)
      .subscribe(
        experts => {
          this.experts = experts;
          console.log(experts);
        },
        error => {
          console.log(error);
        });
  }

  borrarPorId(): void {
    this.dataService.deleteExpertById(this.id)
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
