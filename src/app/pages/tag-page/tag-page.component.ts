import { Component, OnInit } from '@angular/core';
import { EtiquetasService } from 'src/app/services/etiquetas.service';

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
