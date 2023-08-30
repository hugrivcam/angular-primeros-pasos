import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';
//console.log (uuid());
@Injectable({providedIn: 'root'})
export class DbzService{
    constructor() { }

    public characters: Character[] = [
        {
          id: uuid(),
          name: 'Krilin',
          power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500  
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 90000  
        }
    ]; 
    
    public getnewID(): string {
      //const newID:string = uuid();
      return uuid();
    }
    addNewCharacter(c:Character):void
    {
        //console.log(c);
        //console.log("Añadiendo: " + c.name + " " + c.power);  
        //const id = uuid();
         
        this.characters.push(c); //se añade al array por referencia y resulta que depsues de recibir el evento, el valor de c se resetea
    }
    eliminarCharacter(id:string):void
    {
        //otra forma de eliminar por id, generarmos el nuevo array al completo y nos cargamos el que teniamos, filtrando el que queremos eliminar
        this.characters= this.characters.filter(c => c.id !== id);
/*
        //const index = this.characters.findIndex((character) => character.id === id);
        //(c) representa el character, que es cada elemento del array, para cada elemento del array se comprueba si es el id que busco, en el momento que el ID coincide y devuelbe true la funcion devuelve el indidce del primer elementro encontrado
        const index = this.characters.findIndex((c) => c.id === id);
        //this.characters.
        //this.characters.pop(); 
        if (index !== -1){
            this.characters.splice(index,1); //elimina una posicion desde el indice indicado
        }
*/
    }    
    
}