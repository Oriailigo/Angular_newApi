import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
//se debe realizar una injeccion de dependencia
import { NewsapiservicesService } from '../service/newsapiservices.service';
//importo a la info que esta en card
import { Noticia } from '../contenido/noticia.model';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  
  constructor(
    // definir variables para recibir datos
    private route:ActivatedRoute,
    private newService:NewsapiservicesService) { }
    articulos:any=[];
    unaNoticia:any=[];
    ngOnInit(): void {
    // recibir datos, me subscribo a ese cambio
    this.route.params.subscribe((params:Params)=>{
      const id=params['id'];
      this.newFetch(id);
    })

    }
    newFetch(id:string){
        this.newService.getNew(id)
        .subscribe(noticia=>{
          this.unaNoticia=noticia['articles'];
        })
    }

}
