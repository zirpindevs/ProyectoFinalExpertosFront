import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-expert-page',
  templateUrl: './expert-page.component.html',
  styleUrls: ['./expert-page.component.scss']
})
export class ExpertPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'nif', 'cursos', 'disponibilidad', 'estado', 'etiquetas'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


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

  id = 0;
  currentexpert = null;
  message = '';
  // experts = [];

  loading: boolean = false;
  errorMessage = "";

  length = 25;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(private dataService: DataService) {

    //const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    this.obtenerLista();
    //  this.dataSource = new MatTableDataSource(this.experts);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
         this.dataSource = new MatTableDataSource(this.experts);

  }

  handlePageEvent(event: PageEvent) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.obtenerLista();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

  // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerLista() {
    this.dataService.findAll(this.pageSize).subscribe((response)=>{
      console.log('response received')
      console.log(response);
      this.experts = response;

      //count number of objects
      let count = 0;
        for (const key in this.experts){
        if (this.experts.hasOwnProperty(key)) {
          count++;
        }

        this.length = count;
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
    this.dataService.deleteById(this.id)
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
