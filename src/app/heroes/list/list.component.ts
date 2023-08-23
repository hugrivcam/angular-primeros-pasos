import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   heroNames: string[] = ["IronMan","Spiderman","Hulk","Thor","She Hulk"];
   heroeBorrado?:string; //por defecto es undefined u opcional
   BorrarHeroe():void
   {
     this.heroeBorrado = this.heroNames[this.heroNames.length - 1];
     this.heroNames.pop();
   }
}
