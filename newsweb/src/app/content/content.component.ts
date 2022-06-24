import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  detalle:string="contenido de la noticia"
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.router.snapshot.paramMap.get('id')
    if(id){
      this.detalle+=`: $(id)`; 
    }
  }

}
