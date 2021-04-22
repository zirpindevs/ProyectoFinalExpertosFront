import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Expert } from 'src/app/models/expert/expert.model';



@Component({
  selector: 'app-expert-create-page',
  templateUrl: './expert-create-page.component.html',
  styleUrls: ['./expert-create-page.component.scss']
})
export class ExpertCreatePageComponent implements OnInit {


  name: string;
  registerForm: FormGroup = new FormGroup({})

  loading: boolean = false;
  errorMessage = "";

  constructor(private dataService: DataService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    // Before the Login Component Renders, we create our RegisterForm
    // with the Form Builder
    this.registerForm = this.formBuilder.group({
      // Here we define the FormControls with the default value
      name: '',
    });
  }

  returnBack() {
    this.location.back();
  }


  addExperto() {
    this.dataService.crearEtiqueta(this.name);
  }
}
