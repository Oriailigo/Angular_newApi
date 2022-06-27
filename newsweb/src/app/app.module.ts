import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
// importo la api de noticias
import { HttpClientModule } from '@angular/common/http';
// importo mi s services creado de la terminal
import { NewsapiservicesService } from './service/newsapiservices.service';
import { ContenidoComponent } from './contenido/contenido.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContenidoComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule añadir el import escrito
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
