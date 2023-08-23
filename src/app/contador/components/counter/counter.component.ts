import { Component, OnInit } from '@angular/core';

@Component({
    //selector es el titulo para llamarlo desde la pagina html de la forma <app-counter></app-counter>
    selector: 'app-counter',
    //templateUrl: 'name.component.html'
    template: `
       <h1>Hola counter componente 2</h1>
       <hr>
       <h3>Mi Contador: {{counter}}</h3>
       <button (click)="sumarContador(1)" >+1b</button>
       <button (click)="reset()" >  RESET2  </button>
       <button (click)="sumarContador(-1)">-1b</button>       
    `
})

export class CounterComponent implements OnInit {
    counter: number = 0;
    constructor() { }
    ngOnInit() { }
    reset () {this.counter = 0;}
    sumarContador(i:number)
    {
      this.counter+=i;
    }
}

//console.log();
/*import { Component } from "@angular/core";


@Component({
    //selector es el titulo para llamarlo desde la pagina html de la forma <app-counter></app-counter>
    //template contiene lo que queremos mostrar, si uasas con url carga la pagina html que hayamos creado
    selector: 'app-counter',
    template: '<h1>Hola counter componente 2</h1>'
})
    //selector: 'app-root',
    //templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css'   
export class CounterComponent{


}
//la clase CounterComponent tiene que estar incluida en un modulo, en este caso en app.module.ts*/