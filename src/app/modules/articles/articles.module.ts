import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [ArticlesComponent, ArticleFormComponent, ArticleItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule {}
