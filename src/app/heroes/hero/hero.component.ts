import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   public name: string = 'ironMan';
   public age:  number = 45;  //986260368

   get capitalizedName(): string 
   {
     return this.name.toUpperCase();
   }

   getHeroDescription(): string
   { 
     //return `${ this.name } - ${ this.age }`;
     return this.name + " - " + this.age;

   }

   changeNHero(nombre:string):void
   {
     this.name = nombre; 
   }

   changeAge(edad:number):void
   {
     this.age = edad;
   }
   
   pruebaQuery(etiqueta:string):void
   { 
     let etiquetaComillas :string = `"${etiqueta}"`;
     
     document.querySelectorAll("h1")!.forEach(element => {
       //element.innerHTML = "<" + etiqueta + ">texto cambiado con queryselectorALL</" + etiqueta + ">";
       element.innerHTML = `<${etiqueta}>texto cambiado con queryselectorALL</${etiqueta}>`;
     })

     /*document.querySelectorAll("h1")!.forEach(element => {
      element.innerHTML = "<h1>texto cambiado con queryselectorALL</h1>";
     })*/


   }

}
