import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
//import {Character} from "./interfaces/character.interface.ts"
@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class dbzMainPageComponent implements OnInit {
/*    public characters: Character[] = [
        {
          name: 'Krilin',
          power: 1000
        },
        {
            name: 'Goku',
            power: 9500  
        },
        {
            name: 'Vegeta',
            power: 90000  
        }
    ]  
    addNewCharacter(c:Character):void
    {
        //console.log(c);
        //console.log("Añadiendo: " + c.name + " " + c.power);  
        this.characters.push(c); //se añade al array por referencia y resulta que depsues de recibir el evento, el valor de c se resetea
    }
    eliminarCharacter(index:number):void
    {
        //this.characters.pop();   
        this.characters.splice(index,1); //elimina una posicion desde el indice indicado
    }*/

    //injeccion de dependencia en el constructor para poder acceder al servicio
    //cualquier varieble metida en el constructor de esta manera es como si la definieramos directamente en la clase
    //en este caso tenemos la propiedad DbzServ, que es una instancia directa a la clase DbzService definida en el servicio
    constructor(private DbzServ:DbzService) {
        
    }
    get characters():Character[]{
        //return this.DbzServ.characters; //por referencia
        return [...this.DbzServ.characters]; //creo una copia del array
    }
    manejaEventoEliminarCharacter(id:string):void
    {
       this.DbzServ.eliminarCharacter(id);
    }
    manejaEventoaddNewCharacter(c:Character){
       this.DbzServ.addNewCharacter(c);
    }
    ngOnInit() { }
}