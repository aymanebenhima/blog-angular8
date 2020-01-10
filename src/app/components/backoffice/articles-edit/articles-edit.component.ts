import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from './../../../models/article';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(10)]),
    body: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.pattern('[0-9.]+')]),
    active: new FormControl(false)
  });

  id: string = "";

  constructor(
              private articleSerivce: ArticleService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.retreiveOneArticle();
  }

  retreiveOneArticle() {
    this.articleSerivce.getOneArticle(this.id)
        .subscribe((res: Article) => {
          this.articleForm.patchValue(res);

        })
  }

}
