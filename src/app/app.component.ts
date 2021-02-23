import { Component } from '@angular/core';
import { NewsService } from './news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles:Array<any>;
  
  constructor(private newsapi:NewsService){
  }

  ngOnInit() {
    //load articles
    this.newsapi.loadArticles().subscribe(data => this.articles = data['data']);
  }

}
