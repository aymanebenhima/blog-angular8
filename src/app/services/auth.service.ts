import { UserData } from './../models/user-data';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

   }

   register(user: UserData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
   }

   login(user: UserData) {
     return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
   }


}
