import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  styleUrl: './areas.css',
  templateUrl: './areas.html',
})
export class Areas {

  
  num1:string = '';
  num2:string = '';
  resultado:number = 0;
  figura:string = '';

  calcular():void {

    let numero1 = parseInt(this.num1);
    let numero2 = parseInt(this.num2);

    if (this.figura === 'triangulo') {
      this.resultado = (numero1*numero2)/2;
    }

    if (this.figura === 'rectangulo') {
      this.resultado = numero1 * numero2;
    }

    if (this.figura === 'circulo') {
      this.resultado = Math.PI* (numero1**2);
    }

    if (this.figura === 'pentagono') {
    this.resultado = (5 * numero1 * numero2) / 2;
}
}}
