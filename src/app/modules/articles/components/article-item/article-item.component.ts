import { Component, HostBinding, Input } from '@angular/core';
import { Article } from '../../services/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {
  @HostBinding('attr.class') css = 'row';

  @Input() article: Article;

  upvote(): false {
    this.article.upvote();
    return false; // required when href exists on a tag
  }

  downvote(): false {
    this.article.downvote();
    return false;
  }
}
