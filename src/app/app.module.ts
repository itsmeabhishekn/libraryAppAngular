import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BookViewComponent } from './book-view/book-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const myRoute: Routes = [
  {
    path: "",
    component: AdminLoginComponent
  },
  {
    path: "bookadd",
    component: BookAddComponent
  },
  {
    path: "bookdelete",
    component: BookDeleteComponent
  },
  {
    path: "bookedit",
    component: BookEditComponent
  },
  {
    path: "bookissue",
    component: BookIssueComponent
  },
  {
    path: "booksearch",
    component: BookSearchComponent
  },
  {
    path: "bookview",
    component: BookViewComponent
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "userregistration",
    component: UserRegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookDeleteComponent,
    BookSearchComponent,
    BookEditComponent,
    AdminLoginComponent,
    BookIssueComponent,
    SignInComponent,
    UserRegisterComponent,
    BookViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
