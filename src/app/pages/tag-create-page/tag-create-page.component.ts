import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { Location } from '@angular/common';
import { Etiqueta } from 'src/app/models/etiqueta/etiqueta.model';
import { EtiquetasService } from 'src/app/services/etiquetas.service';

@Component({
  selector: 'app-tag-create-page',
  templateUrl: './tag-create-page.component.html',
  styleUrls: ['./tag-create-page.component.scss']
})
export class TagCreatePageComponent implements OnInit {

  tags: any = {
    name: '',
  };
  name: string;
  registerForm: FormGroup = new FormGroup({})

  loading: boolean = false;
  errorMessage = "";

  constructor(private etiquetaService: EtiquetasService, private formBuilder: FormBuilder, private location: Location) { }

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

  addEtiqueta() {
  this.tags.name = this.name;
  this.etiquetaService.crearEtiqueta(this.tags);
  }


}
