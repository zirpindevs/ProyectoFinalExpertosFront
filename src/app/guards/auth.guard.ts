import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if ( sessionStorage.getItem('Token')&&this.authService.loggedIn) {
             return true
             } else {
                  console.log(this.authService.loggedIn)
                        console.log(sessionStorage.getItem('Token'))
                          // If the user is not logged in, we send him to login
                              this.router.navigate(['/login']);
                               return false;       };

  }

}
