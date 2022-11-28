import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
title=""

searchBook = () => 
{
let searchData = {"title":this.title}
console.log(searchData)
}
}
