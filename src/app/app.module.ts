import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Select Input and Realted Important Modules
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { TagCreatePageComponent } from './pages/tag-create-page/tag-create-page.component';
import { TagDialogDeleteComponent } from './pages/tag-dialog-delete/tag-dialog-delete.component';
import { ExpertCreatePageComponent } from './pages/expert-create-page/expert-create-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ExpertPageComponent,
    TagPageComponent,
    LoginPageComponent,
    ExpertDetailPageComponent,
    TagCreatePageComponent,
    TagDialogDeleteComponent,
    ExpertCreatePageComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
   ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
