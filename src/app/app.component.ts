import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';


  addArticle(title:HTMLInputElement,link:HTMLInputElement)
  {
    console.log(title.value);
    console.log(link.value);
    console.log('Adding article title: '+title.value +'and link '+link.value);
    return false;
  }
}
