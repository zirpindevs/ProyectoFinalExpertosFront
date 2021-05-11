import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Angular Router for navigation
import { Router } from '@angular/router';

// Angular Reactive Forms
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

// RXJS Imports
import { Subscription } from 'rxjs';

// Models:
import { User } from 'src/app/models/user/user.model';

// Services:
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

 hide = true;
 private user: User;

  // Form Group to contain User Data to Login
  loginForm: FormGroup = new FormGroup({});

  // AuthSubscription
  authSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Before the Login Component Renders, we create our RegisterForm
    // with the Form Builder
    this.loginForm = this.formBuilder.group({
      // Here we define the FormControls with the default value
      username: '',
      password: ''
    });

  }

  login(): void {

    // We verify the LRegisterForm is Valid and we can access to username and password
    if(this.loginForm.valid && this.loginForm.value.username && this.loginForm.value.password){
      let user: User = new User(this.loginForm.value.username, this.loginForm.value.password)

      // We verify that the user is correctly created
      // console.table(user);

      // We call the Auth Service to login the user
     this.authService.login(new User(this.loginForm.value.username, this.loginForm.value.password))
        .subscribe((response) => {
          if(response.response.response == 'OK'){
          // if(response.token){
          // if(response.response.response == 'OK'){
            // Set Token in Session Storage of our Navigator
            sessionStorage.setItem('Token', response.token);
            // We set loggedIn in our Service in order to be able to navigate to Home
            this.authService.setLoggedIn(true);
            localStorage.setItem('userName', this.loginForm.value.username)
            // Navigation to "/Home"
            // In this moment, the AuthGuard will be executed, as we are trying to acces to
            // HomePage that has the canActivate assigned to it
            this.router.navigate(['/home']);
          }else{
            alert('Error: No Token Received');
            this.authService.setLoggedIn(false);
            sessionStorage.removeItem('Token');
          }
        });
    } else {
      this.authService.setLoggedIn(false);
      alert('You must provide a username and a valid password')
    }

  }

  // We ensure our subscription disappears with the LoginComponent
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
