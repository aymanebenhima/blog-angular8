import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/backoffice/articles-list/articles-list.component';
import { ArticlesAddComponent } from './components/backoffice/articles-add/articles-add.component';
import { ArticlesEditComponent } from './components/backoffice/articles-edit/articles-edit.component';
import { LoginComponent } from './components/backoffice/login/login.component';
import { RegisterComponent } from './components/backoffice/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesAddComponent,
    ArticlesEditComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
