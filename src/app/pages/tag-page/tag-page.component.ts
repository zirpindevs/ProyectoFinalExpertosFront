import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EtiquetasService } from 'src/app/services/etiquetas.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];



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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private etiquetaService: EtiquetasService) { }


  ngOnInit(): void {
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
    this.etiquetaService.deleteTagById(this.id)
      .subscribe(
        tags => {
          this.tags = tags;
          console.log(tags);
        },
        error => {
          console.log(error);
        });
  }
}
