import { Component } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(title.value, link.value);
  }
}
