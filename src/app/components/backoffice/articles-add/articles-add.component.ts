import { Article } from './../../../models/article';
import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.css']
})
export class ArticlesAddComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(10)]),
    body: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.pattern('[0-9.]+')]),
    active: new FormControl(false)
  });
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  persistArticle() {

    if (this.articleForm.invalid) {
      alert("Sir tl3eb");
      return;
    }


    let data: Article = {
      ...this.articleForm.value,
      created_at: Date()
    }

    this.articleService.saveArticle(data)
        .then(() => {
          this.toastr.success('Created', 'Article created Successfuly', {
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            tapToDismiss: true
              });
          this.router.navigateByUrl('/blog')
        })
        .catch((err) => console.error(err));
  }
}
