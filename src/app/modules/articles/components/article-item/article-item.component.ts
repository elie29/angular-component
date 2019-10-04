import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {
  @HostBinding('attr.class') css = 'row';

  @Input() article: any;

  upvote(): false {
    this.article.points++;
    return false; // required when href exists on a tag
  }

  downvote(): false {
    this.article.points--;
    return false;
  }
}
