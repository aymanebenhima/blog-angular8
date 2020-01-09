import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/backoffice/login/login.component';
import { RegisterComponent } from './components/backoffice/register/register.component';
import { ArticlesEditComponent } from './components/backoffice/articles-edit/articles-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './components/backoffice/articles-list/articles-list.component';
import { ArticlesAddComponent } from './components/backoffice/articles-add/articles-add.component';


const routes: Routes = [
  { path: "blog", component: ArticlesListComponent },
  { path: "blog/create", component: ArticlesAddComponent },
  { path: "blog/:id/edit", component: ArticlesEditComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
