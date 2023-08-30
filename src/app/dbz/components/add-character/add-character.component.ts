//import { DbzService } from './../../services/dbz.service';
//import { v4 as uuid} from 'uuid';
import { DbzService } from '../../services/dbz.service';
import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';
//import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {  id: "0",  name: '',  power: 0}
  constructor(private dbzServ:DbzService){};//hago visible la clase del servicio por injection de dependencia  
  
    
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //creamos un eventos emisor de Characters
    
    enviarCharacter()
    {
      //debugger;
      //console.log(this.character);
      if(this.character.name.length > 0) {
        //console.log(this.dbzServ.getnewID());
        this.character.id = this.dbzServ.getnewID();
        this.onNewCharacter.emit(this.character);
        this.character = {id:"0", name: '',power: 0};
        //this.character.power = 0;
        //this.character.name = '';
      }
      else{
        return;
      }
    }
 
   /* comprobarArray()
    {
      let c : Character = {id:"0",name:"",power:0};
      const miLista:Character[] = [];
      c.id = uuid();
      c.name = "hugo"
      c.power = 10;
      console.log(c);
      console.log({...c});
      miLista.push({...c});//se pone entre llaves porque c es un objeto
      console.log (miLista);
      c.id = uuid();
      c.name = "caca";
      c.power = 1000;
      miLista.push({...c}); //por valor
      console.log (miLista);
      c.id = uuid();
      c.name = "adios"
      c.power = 2;
      miLista.push(c);//por referencia
      c.id = uuid();
      c.name = "adios2"
      c.power = 3;
      console.log (miLista);
    }*/

    
}
