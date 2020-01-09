import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.css']
})
export class ArticlesAddComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(10)]),
    body: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.pattern('[0-9]+')]),
    active: new FormControl(false)
  });
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  persistArticle() {
    this.articleService.saveArticle(this.articleForm.value);
  }
}
