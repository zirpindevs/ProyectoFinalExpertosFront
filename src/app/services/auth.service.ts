import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../models/user/user.model';

// We import HTTP Client to perform HTTP Requests
import { HttpClient } from '@angular/common/http';

const apiUser = 'http://localhost:8080/api/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // Boolean Variable to tell the AuthGuard that the user is Logged In
  private isLoggedIn: boolean = false;



  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  // We inject Http Client to the constructor of the service
  constructor(private router: Router, private http: HttpClient) {
    this.user = this.userSubject.asObservable();
   }

  /**
   * Login for our Contact App
   * @param user User that's login in
   * @return Observable<boolean>
   */
  // login(user: User): Observable<boolean> {

  //   /**
  //    *  We controll credentials of our user
  //    *  we return an Observable of type boolean
  //    *  with the use of the method 'of'
  //   */
  //   if (user.email === 'admin@email.com' && user.password === 'admin') {
  //     return of(true);
  //   } else {
  //     return of(false);
  //   }
  // }


//   login(email: string, password: string) {
//     return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//             this.userSubject.next(user);
//             return user;
//         }));
// }


  /**
   * Login with real HTTP Request
   * @param user User
   * @reurn Observable<any>
   */
  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    };
    //return this.http.post('https://proyectofinal1234.ddns.net:8080/api/users', body)
   return this.http.post('https://reqres.in/api/login', body)

  }

  // Setter and Getter of LoggedIn
  get loggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  // Registro
  registro(user: User) {
    return this.http.post(apiUser, user);
  }


}
