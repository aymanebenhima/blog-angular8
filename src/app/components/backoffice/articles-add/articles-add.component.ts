import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.css']
})
export class ArticlesAddComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl(""),
    body: new FormControl(""),
    price: new FormControl(0),
    active: new FormControl(false)
  });
  constructor() { }

  ngOnInit() {
  }

}
