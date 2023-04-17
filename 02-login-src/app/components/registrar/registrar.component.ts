import { Component } from '@angular/core';
import { User } from 'src/app/models/User/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  //declaro el array y su tipo
  usuarios: User[] = [];
  username:string="";
  password:string="";

  //es si o si con constructor que se instancian objetos en ts
  constructor(private router: Router) {
    this.usuarios.push(new User("fran", '1234'));
    this.usuarios.push(new User("juan", '333'));
    this.usuarios.push(new User("maria", '444'));
  }

  ngOnInit() {
    // load the usuarios array from local storage when the component is initialized
    const storedUsuarios = localStorage.getItem('usuarios');
    if (storedUsuarios) {
      this.usuarios = JSON.parse(storedUsuarios);
    }
  }

  //como el console.log, no puede ir en el body de una class, debe ir en una funcion
  save(){
    //get input data
    const newUser = new User(this.username, this.password);
    let existe = false;
    this.usuarios.forEach(x=>{
      x.username == this.username ? existe = true : console.log(`${x.username} no es ${this.username}`)
    }); 
    if(!existe){
      this.usuarios.push(newUser); //save in array
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios)); //save array in memory
      
      alert(`Usuario ${this.username} creado con exito!`);
      this.router.navigate(['./login']);
    }else{
      alert(`El usuario ${this.username} ya existe, pruebe con un nombre nuevo`); //meter sweet alert
    }
  }

  usernameAlreadyExists(existingUser:User){
    return existingUser.username == this.username ? true :  false; 
  }

}
