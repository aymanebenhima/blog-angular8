import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../models/article';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private afs: AngularFirestore) { }

  getAll() {

    return this.afs.collection('articles').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Article;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  saveArticle(data: Article) {
    return this.afs.collection('articles').add(data);
  }

  getOneArticle(id: string) {
    return this.afs.collection('articles').doc(id).valueChanges();
  }
}
