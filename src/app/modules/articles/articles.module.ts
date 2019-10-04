import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [ArticlesComponent, ArticleFormComponent, ArticleItemComponent],
  imports: [CommonModule],
  exports: [ArticlesComponent]
})
export class ArticlesModule {}
