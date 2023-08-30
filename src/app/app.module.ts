import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CounterModule} from './contador/counter.module';
//import { HeroesModule } from './heroes/Heroes.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

//import { CounterComponent } from './contador/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';

//CounterComponent,
//    HeroComponent,
//    ListComponent
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //CounterModule,
    //HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
