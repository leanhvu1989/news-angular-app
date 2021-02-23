import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient) { }


  loadArticles(){
    // run locally
    // return this.http.get('http://localhost:3000/articles');

    return this.http.get('https://fake-api-server-about-news-1.herokuapp.com/articles');
  }
}
