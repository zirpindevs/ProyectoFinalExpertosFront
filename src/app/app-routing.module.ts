import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/experts'
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
    path: 'register', // http:localhost:4200/register
    component: RegisterPageComponent
  },
  {
    path: 'experts',  // http:localhost:4200/experts
    component: ExpertPageComponent,
  },
  {
    path: 'tags',  // http:localhost:4200/tags
    component: TagPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
