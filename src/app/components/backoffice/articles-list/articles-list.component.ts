import { Article } from './../../../models/article';
import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
    
  }

  getAllArticles() {
    this.articleService.getAll()
        .subscribe((res: Article[]) => {
          this.articles = res;
          console.log(res);
        });
  }

}
