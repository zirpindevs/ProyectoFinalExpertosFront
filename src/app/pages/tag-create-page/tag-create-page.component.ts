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
    this.etiquetaService.crearEtiqueta(this.name)
      .subscribe(
        (etiqueta: Etiqueta) => this.handleContactSaveResponse(etiqueta),
        err => this.handleContactSaveError(err)
      );
  }
  handleContactSaveError(err: any): void {
    throw new Error('Method not implemented.');
  }
  handleContactSaveResponse(etiqueta: Etiqueta): void {
    throw new Error('Method not implemented.');
  }


}
