import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  goToExpertos(){
    this.router.navigate(['/expertos']);
  }

  logout(): void {
    this.authService.setLoggedIn(false);
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('Id');
    this.router.navigate(['/login']);
  }
}
