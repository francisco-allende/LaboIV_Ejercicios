import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/user';
import Swal from 'sweetalert2';
import Toastify from 'toastify-js';

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
        Toastify({
          text: `Bienvenido ${this.username}!`,
          duration: 3000,
          gravity: "top", 
          position: "right",
          style: {
            background: "linear-gradient(to right, purple, blue )",
          },
        }).showToast();
        //Swal.fire(`Bienvenido de nuevo ${this.username}!`, 'Siempre es bueno volver a verte', 'success');
        this.router.navigate(['./bienvenido']);
      }else{
        Swal.fire(`Contraseña incorrectoa`, 'Intenta de nuevo', 'error');
      }
    }else{
      Swal.fire(`El Usuario ${this.username} es inexistente`, 'Intenta de nuevo', 'error');
    }
  }
}


