import { Component } from '@angular/core';

/*
1- (app.component.html) Realizar:
una aplicacion que se le ingresen dos edades en dos cuadro de textos
edadUno, EdadDos
mostrar el promedio y la suma en dos cuadros de textos nuevos
botones "calcular" y "limpiar cuadros de textos"
*/



@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
  edadUno:number = 0;
  edadDos:number = 0;
  promedio:number = 0;
  sumaEdades:number = 0;

  calcularPromedio(){
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  sumar(){
    this.sumaEdades = this.edadUno + this.edadDos;
  }

  vaciar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.sumaEdades = 0;
  }
}
