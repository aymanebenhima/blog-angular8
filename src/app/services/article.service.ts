import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private afs: AngularFirestore) { }

  getAll() {

    return this.afs.collection('articles').valueChanges();
  }

  saveArticle(data: Article) {
    
    return this.afs.collection('articles').add(data);

  }
}
