import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [  
  //{path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'bienvenido', component:BienvenidoComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'**', component:ErrorComponent} //el error va siempre al final o sino no me toma los otros paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
