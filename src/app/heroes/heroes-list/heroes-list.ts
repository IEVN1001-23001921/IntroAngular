import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {

imageWidth:number=40;
 imageMargin:number=2; 
  muestraImage:boolean=true;
  listFilter:string='';
  
  showImage():void{
    this.muestraImage=!this.muestraImage;
  }



  heroes:IHeroes[]=[
    {
      imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    description:'Kame Hame Ha. El protagonista de la serie, conocido por su gran poder y personalidad amigable.',
    race:'Saiyan',
    ki:60000000
    },
    {
      imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
    nombre:'Vegeta',
    description:'Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. ',
    race:'Saiyan',
    ki:54000000
    },
    {
      imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Picolo',
    description:'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación.',
    race:'Namekian',
    ki:2000000
    },
    {
      imagen:'https://dragonball-api.com/characters/bulma.webp',
    nombre:'Bulma',
    description:'Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball',
    race:'Human',
    ki:0
    }
   
  ]
}
