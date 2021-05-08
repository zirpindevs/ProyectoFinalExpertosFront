import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: [18, Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])]
    });
  }

  // Submit
  submitRegisterForm() {
    console.table(this.registerForm.value);
    this.authService.registro(this.registerForm.value)
    this.router.navigate(['/login']);
  }

}
