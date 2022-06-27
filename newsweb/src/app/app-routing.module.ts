import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent }, //home
  {path:'contenido/:id', component:ContenidoComponent }, //contenido
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
