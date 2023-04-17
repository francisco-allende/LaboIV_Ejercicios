import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
//con poner el nombre del componente sale la ruta al toque
//Si o si importo aca. Aca importo
import { FormsModule } from '@angular/forms'; 

//en imports le digo quien lo va a usar
@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //aqui lo q importe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
