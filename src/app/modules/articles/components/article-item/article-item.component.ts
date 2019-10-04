import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {
  @HostBinding('attr.class') css = 'row';

  article = {
    title: 'Angular',
    meta: '(angular.io)',
    href: '//angular.io',
    points: 5
  };

  upvote(): false {
    this.article.points++;
    return false; // required when href exists on a tag
  }

  downvote(): false {
    this.article.points--;
    return false;
  }
}
