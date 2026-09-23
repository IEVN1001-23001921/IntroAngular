import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  styleUrl: './usuario.css',
  templateUrl: './usuario.html',
})
export class Usuario {

  
  usuario:string = '';
  contra:string = '';
  resultado:string = '';
  usuario_correcto="admin";
  contraseña_correcta="12345"
  

  inicio():void {
 

    if (this.usuario !== this.usuario_correcto) {

      this.resultado = 'El nombre de usuario no es válido.';

    } else if (this.contra !== this.contraseña_correcta) {

      this.resultado = 'La contraseña no es válida.';

    } else {

      this.resultado = 'Bienvenido al sistema, ' + this.usuario ;

    }


}}
