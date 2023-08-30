import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    //constructor(){}
    //public i: number = 0;
    @Input() //permite pasar como parametro desde html los datos que yo necesite, en este caso un array de Character
    public characterList: Character[] = [];// [{id: "0",name: 'Trunks',power: 10}];

    
    @Output()
    //public onDeleteCharacter = new EventEmitter<number>(); //funciona igual que la siguiente linea
    public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

    /*emitEliminarCharacter(index:number):void { 
      //emitir indice del personaje
      this.onDeleteCharacter.emit(index);
      //console.log({index});
    }*/

    emitEliminarCharacter(id:string):void
    {
      this.onDeleteCharacter.emit(id);
    }

}
