import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-clase';
  nro1:number = 10;
  nro2:number = 8;
  resultado:number = 0;
  
  //function sin la palabrita function. Sin params
  Sumar() {
    this.resultado = this.nro1 + this.nro2;
    console.log(this.resultado);
  }
}


