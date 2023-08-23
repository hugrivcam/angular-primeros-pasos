
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";

@NgModule({
    exports:[
        HeroComponent,
        ListComponent
    ],
    declarations:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]//permite usar las directivas ngIF y demas directivas dentro de mi módulo.
})
export class HeroesModule
{}