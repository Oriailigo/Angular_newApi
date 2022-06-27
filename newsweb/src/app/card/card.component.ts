import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // agrego como parametro una variable al constructor
  constructor(private _service:NewsapiservicesService) { }
  // me creo un array y lo llamo dentro del ngOnit para pasarle el result
  cardDisplay:any=[];
  ngOnInit(): void {
     this.fetchNews(); // llamo al metodo
  }
  fetchNews(){
     // el card se subscribe al service
     this._service.getAllNews().subscribe((news)=>{
      console.log(news)
      this.cardDisplay=news.articles; // me quedo con los valores de result
    })
  }
}
