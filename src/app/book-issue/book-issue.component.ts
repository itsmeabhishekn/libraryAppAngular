import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
name=""
title=""
date=""
id=""

issueBook = ()=>
{
  let issueData = {"name":this.name,"title":this.title,"date":this.date,"id":this.id,}
  console.log(issueData)
}

}
