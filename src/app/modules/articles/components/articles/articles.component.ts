import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../services/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  constructor(private articlesService: ArticlesService) {}

  get articles(): Article[] {
    return this.articlesService.getArticles();
  }

  /**
   * Destructuring event into title and link. link is renamed href
   */
  onAddedArticle({ title, link: href }: { title: string; link: string }): void {
    this.articlesService.add(new Article(title, href));
  }

  onRemoved(article: Article): void {
    this.articlesService.remove(article);
  }
}
