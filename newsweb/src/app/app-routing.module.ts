import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:'lol', component:CardComponent }, //home
  {path:'contenido:id', component:ContentComponent }, //home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
