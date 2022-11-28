import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  title=""
  description=""
  price=""
  author=""
  publisher =""
  language=""
  year=""
  code=""
  distribution=""

readValues = () =>
{
  let data = {"title":this.title,"description":this.description,
"price":this.price,"author":this.author,"publisher":this.publisher,"language":this.language,"year":this.year,"code":this.code,"distribution":this.distribution}

console.log(data)
}

}
