import { Component } from '@angular/core';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoFinal';

  constructor(private router: Router){

  }

    mostrarNav(): boolean{
      switch(this.router.url){
        case '/expertos':
          return true;
        case '/etiquetas':
          return true;
        case '/expertos/crear':
          return true;
        case '/etiquetas/crear':
          return true;
        case '/expertos/detalles/:id':
          return true;
        default :
          return false;
        }

  }
}


