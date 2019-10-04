import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemVotesComponent } from './components/article-item-votes/article-item-votes.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleFormComponent,
    ArticleItemComponent,
    ArticleItemVotesComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule {}
