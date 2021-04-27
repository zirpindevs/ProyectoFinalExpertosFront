import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  mostrarNav(): boolean{
    switch(this.router.url){
      case '/expertos':
        return true;
      case '/home':
        return false;
      case '/login':
          return false;
      case '/':
          return false;
      case '/etiquetas':
        return true;
      case '/expertos/crear':
        return true;
      case '/etiquetas/**':
        return true;
      case '/expertos/detalles/:id':
        return true;
      default :
        return false;
      }
}

}
