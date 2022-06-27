import { Injectable } from '@angular/core';
//importo 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  new=[{
    id:'1',
  }

  ];
      constructor(private _http:HttpClient) {
        
       }
       //url de la api news
       newsApi_url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=8ab9f6a80b5241b4ba7f0b3938ea683e"
      // llamo al componente card() y le paso la url de noticias
       getAllNews():Observable<any>{
        return this._http.get(this.newsApi_url);
       }
    
       getNew(id:string):Observable<any>{
        return this._http.get(this.newsApi_url+'/{id}');
       }
   
  }
