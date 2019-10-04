import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostBinding,
  DoCheck,
  ChangeDetectorRef
} from '@angular/core';

import { Article } from '../../services/article.model';

@Component({
  selector: 'app-article-item-votes',
  templateUrl: './article-item-votes.component.html',
  styleUrls: ['./article-item-votes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // article is not refreshed unless its reference changes
})
export class ArticleItemVotesComponent implements DoCheck {
  @Input() article: Article;

  @HostBinding('attr.class') css = 'four wide column center aligned votes';

  private votes: number;

  constructor(private cd: ChangeDetectorRef) {}

  // Interested in votes only
  ngDoCheck(): void {
    const votes = this.article.getVotes();
    if (this.votes !== votes) {
      this.votes = votes;
      this.cd.detectChanges();
    }
  }
}
