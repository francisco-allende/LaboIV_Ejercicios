import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){};
  username:string="";
  password:string="";
  usuarios:User[]=[];

  ngOnInit(){
    const storedUsuarios = localStorage.getItem('usuarios');
    if(storedUsuarios){
      this.usuarios = JSON.parse(storedUsuarios);
    }
  }

  navigateToRegistrar(){
    this.router.navigate(['./registrar']);
  }

  logUser(){
    let existe = false;
    this.usuarios.forEach(x=>{
      x.username == this.username ? existe = true : ''
    }); 
    if(existe){
      let esLaClave = false;
      this.usuarios.forEach(x=> {
        x.password == this.password ? esLaClave = true : ''
      });
      if(esLaClave){
        alert("Bienvenido!");
        this.router.navigate(['./bienvenido']);
      }else{
        alert('Contraseña incorrecta');
      }
    }else{
      alert("Usuario inexistente");
    }
  }
}


