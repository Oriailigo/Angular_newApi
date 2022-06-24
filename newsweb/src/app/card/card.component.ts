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
    // el card se subscribe al service
    this._service.cardTarjeta().subscribe((result)=>{
      console.log(result)
      this.cardDisplay=result.articles; // me quedo con los valores de result
    })
  }

}
