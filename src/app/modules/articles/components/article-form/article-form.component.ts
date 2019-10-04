import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  @Output() addedArticle = new EventEmitter<{ title: string; link: string }>();

  addArticle(title: string, link: string): void {
    if (title && link) {
      this.addedArticle.emit({ title, link });
    }
  }
}
