import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
import { EtiquetasService } from 'src/app/services/etiquetas.service';
import { Etiqueta } from 'src/app/models/etiqueta/etiqueta.model';
import { TagDialogDeleteComponent } from "../tag-dialog-delete/tag-dialog-delete.component"

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {

  tags: any = {
    id: '',
    name: '',
    createDate: '',
  };


  id = 0;
  displayedColumns: string[] = ['id', 'name', 'createDate', 'actions'];
  etiquetaSource: MatTableDataSource<Etiqueta>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  loading: boolean = false;
  errorMessage = "";

  length = 25;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(private etiquetaService: EtiquetasService, private location: Location, public dialogo: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {

    this.obtenerListaEtiqueta("");
   }


  ngOnInit(): void {
    this.etiquetaSource = new MatTableDataSource(this.tags);
  }


  ngAfterViewInit() {
    this.etiquetaSource.paginator = this.paginator;
    // this.etiquetaSource.sort = this.sort;
  }


  mostrarDialogo(tagToDelete: any): void {
    this.dialogo
      .open(TagDialogDeleteComponent, {
        data: `¿Deseas borrar la etiqueta?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.etiquetaService.deleteTagById(Number(tagToDelete.id)).subscribe(() => console.log("user deleted"));;
          alert(" "+tagToDelete.name+" Borrada!");}

      });
  }

  // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerLista() {
    this.etiquetaService.findAllTags().subscribe((tags: any)=>{
      console.log(tags);
      this.tags = tags;
    })
  }


  buscarTagPorId(): void {
    this.etiquetaService.searchTagById(this.id)
      .subscribe(
        tags => {
          this.tags = tags;
          console.log(tags);
        },
        error => {
          console.log(error);
        });
  }

  borrarTagPorId(): void {
    this.etiquetaService.deleteArticle(this.id);
    this.refreshComponent();
  }

  refreshComponent(){
    //this.router.navigate([this.router.url])
    this.router.navigate(['/etiquetas']);
 }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.etiquetaSource.filter = filterValue.trim().toLowerCase();

    if (this.etiquetaSource.paginator) {
      this.etiquetaSource.paginator.firstPage();
    }
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.obtenerListaEtiqueta(this.etiquetaSource.filter);
}

  filtrarNombre(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.etiquetaSource.filter = filtro.trim().toLowerCase();
    console.log(this.etiquetaSource.filter);
    this.obtenerListaEtiqueta(this.etiquetaSource.filter);

    if (this.etiquetaSource.paginator) {
      this.etiquetaSource.paginator.firstPage();
    }
  }

  returnBack() {
    this.location.back();
  }

   // Método para obtener una frase de la API Restful
  // a través del servicio de DataService
  obtenerListaEtiqueta(filter_name :string) {
    this.etiquetaService.findAllTagsWithFilter(filter_name, this.pageSize).subscribe((response)=>{
      console.log('response received')
      console.log(response);
      this.tags = response;

      //count number of objects
      let count = 0;
        for (const key in this.tags){
        if (this.tags.hasOwnProperty(key)) {
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

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

}
