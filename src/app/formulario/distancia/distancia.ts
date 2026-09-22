import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {

   num1:string=''
  num2:string=''
  num3:string=''
  num4:string=''
  resultado:number=0

distancia():void{
  this.resultado=
Math.sqrt(((parseInt(this.num3) - parseInt(this.num1)) ** 2) + ((parseInt(this.num4) - parseInt(this.num2)) ** 2))  
}
}
