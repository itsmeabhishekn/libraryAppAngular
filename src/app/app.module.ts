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

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookDeleteComponent,
    BookSearchComponent,
    BookEditComponent,
    AdminLoginComponent,
    BookIssueComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
