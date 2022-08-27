import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'cursos',
   loadChildren: ()=> import('./cursos/cursos.module').then(mod => mod.CursosModule)},
   {path: 'alunos',
   loadChildren: ()=> import('./alunos/alunos.module').then(mod => mod.AlunosModule)},
   
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
