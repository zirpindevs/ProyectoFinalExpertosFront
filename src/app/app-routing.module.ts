import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertCreatePageComponent } from './pages/expert-create-page/expert-create-page.component';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TagCreatePageComponent } from './pages/tag-create-page/tag-create-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'expertos',  // http:localhost:4200/expertos
    component: ExpertPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expertos/detalles/:id',  // http:localhost:4200/expertos/id
    component: ExpertDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expertos/crear',  // http:localhost:4200/expertos/crear
    component: ExpertCreatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas',  // http:localhost:4200/etiquetas
    component: TagPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'etiquetas/crear',  // http:localhost:4200/etiquetas/crear
    component: TagCreatePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
