import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  loading = false;
  submitted = false;
  registerForm: FormGroup = new FormGroup({})

  user: any = {
    email: '',
    password: ''
  }

 constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

 ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  });
 }

  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
     }

    this.user.email = this.f.email.value;
    this.user.password = this.f.password.value;
    this.loading = true;
    this.authService.registro(this.user)
    .pipe(first())
    .subscribe({
      next: () => { // get return url from query parameters or default to home page
         const returnUrl = this.route.snapshot.queryParams['login'] || '/';
          this.router.navigateByUrl(returnUrl); },
          error: (error: any) => { console.log(error);
            this.loading = false;
     } });
    }
   }
