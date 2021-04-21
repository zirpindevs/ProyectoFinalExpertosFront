import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TagCreatePageComponent } from './pages/tag-create-page/tag-create-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePageComponent,
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'expertos',  // http:localhost:4200/expertos
    component: ExpertPageComponent,
  },
  {
    path: 'expertos/:id',  // http:localhost:4200/expertos/id
    component: ExpertDetailPageComponent,
  },
  {
    path: 'etiquetas',  // http:localhost:4200/etiquetas
    component: TagPageComponent,
  },
  {
    path: 'etiquetas/crear',  // http:localhost:4200/etiquetas/crearetiquetas
    component: TagCreatePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
